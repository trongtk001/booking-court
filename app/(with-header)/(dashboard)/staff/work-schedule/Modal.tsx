import Button from '@/Components/button';
import Modal from '@/Components/modal';
import { useUserSlot } from '@/hooks';
import { AttendanceStatus } from '@/model';
import { WorkingStatus } from '@/model/enum/working-status';
import dayjs from 'dayjs';
import { useSession } from 'next-auth/react';
import { toast } from 'react-toastify';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  data: any;
};

const EventModal = ({ isOpen, onClose, data }: Props) => {
  const user = useSession().data?.user;
  const startDate = dayjs(data.start).format('DD/MM/YYYY HH:mm');
  const endDate = dayjs(data.end).format('DD/MM/YYYY HH:mm');
  const { checkAttendance } = useUserSlot();

  const isWithin15Minutes = (startTime: string) => {
    const eventStartTime = dayjs(startTime);
    const now = dayjs(new Date());

    // Check if the event's date is the same as today's date
    const isSameDay = eventStartTime.isSame(now, 'day');

    // Calculate the time difference in minutes between the event's start time and now
    const timeDiff = eventStartTime.diff(now, 'minute');

    // Check if the event's start time is after now
    const isAfter = eventStartTime.isAfter(now);

    return isSameDay && timeDiff <= 15 && isAfter;
  };

  const handleCheckAttendance = async () => {
    if (!user) return toast.error('User not found');
    const res = await checkAttendance(user.id, data.workingSlotInAMonth.id);
    if (res.status === 'OK') {
      toast.success('Attendance checked successfully');
      onClose();
    }
  };

  return (
    <Modal isOpen={isOpen} closeModal={() => onClose()}>
      <div className="flex flex-col gap-3 w-full transform overflow-hidden rounded-2xl bg-white py-6 px-10 text-left align-middle shadow-xl">
        <div className="p-4">
          <div className="mb-4">
            <h2 className="text-xl font-bold">Information:</h2>
            <p className="text-lg">Staff Name: {data.users.userName}</p>
          </div>

          <div className="mb-4">
            <h2 className="text-xl font-bold">Working Slot Information:</h2>
            <p className="text-lg">Start Time: {new Date(data.workingSlotInAMonth.startTime).toLocaleString()}</p>
            <p className="text-lg">End Time: {new Date(data.workingSlotInAMonth.endTime).toLocaleString()}</p>
            <p className="text-lg">Slot Hour: {data.workingSlotInAMonth.slotHour}</p>
            <p className="text-lg">Slot Salary: {data.workingSlotInAMonth.slotSalary}</p>
            {/* <p className="text-lg">Working Status: {WorkingStatus[data.workingSlotInAMonth.workingStatus]}</p> */}
          </div>

          <div>
            <h2 className="text-xl font-bold">Attendance Status:</h2>
            <p className="text-lg">Status: {AttendanceStatus[data.attendanceStatus]}</p>
          </div>
        </div>
        {isWithin15Minutes(data.workingSlotInAMonth.startTime) && <Button onClick={handleCheckAttendance}>Check Attendance</Button>}
        <Button onClick={onClose}>Close</Button>
      </div>
    </Modal>
  );
};

export default EventModal;
