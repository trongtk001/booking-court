'use client';
import { useWokingSlot } from '@/hooks';
import { getFirstDateOfWeek } from '@/utils/util';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { useEffect, useRef, useState } from 'react';
import './style.css';
import EventModal from './Modal';
import { useSession } from 'next-auth/react';
import { useUserSlotByUserId } from '@/hooks/useUserSlot';
import { AttendanceStatus } from '@/model';

type Props = {};

const WorkSchedule = (props: Props) => {
  const user = useSession().data?.user;
  const calendarRef = useRef<FullCalendar | null>(null);
  const [startDate, setStartDate] = useState<Date>(getFirstDateOfWeek(new Date()));
  const [events, setEvents] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<any | null>(null);
  const endDate = new Date(startDate);
  endDate.setDate(endDate.getDate() + 7);

  const { data, mutate } = useUserSlotByUserId(user?.id ?? -1);

  useEffect(() => {
    if (data) {
      const newEvents = data.result.map((i: any, index: number) => ({
        start: i.workingSlotInAMonth.startTime,
        end: i.workingSlotInAMonth.endTime,
        color: getColorForAttendanceStatus(i.attendanceStatus, i.workingSlotInAMonth.startTime),
        id: index,
      }));
      setEvents(newEvents);
    }
  }, [data]);

  const handlePrevWeek = () => {
    const newStartDate = new Date(startDate);
    newStartDate.setDate(newStartDate.getDate() - 7);
    setStartDate(newStartDate);
    if (calendarRef.current) {
      calendarRef.current.getApi().gotoDate(newStartDate);
    }
  };

  const handleNextWeek = () => {
    const newStartDate = new Date(startDate);
    newStartDate.setDate(newStartDate.getDate() + 7);
    setStartDate(newStartDate);
    if (calendarRef.current) {
      calendarRef.current.getApi().gotoDate(newStartDate);
    }
  };

  return (
    <div>
      <div className="flex place-content-center h-20 rounded-t-lg border border-primary">
        <button className="h-10 w-10 my-auto hover:opacity-60 hover:cursor-pointer">
          <ChevronLeftIcon onClick={handlePrevWeek} className="h-10 w-10  inline-block " />
        </button>
        <h3 className="w-100 select-none inline-block text-center leading-20 font-bold text-3xl ">
          {startDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
        </h3>
        <button className="h-10 w-10 my-auto hover:opacity-60 hover:cursor-pointer">
          <ChevronRightIcon onClick={handleNextWeek} className="h-10 w-10  inline-block " />
        </button>
      </div>
      <FullCalendar
        ref={calendarRef}
        plugins={[timeGridPlugin]}
        initialView="timeGridWeek"
        headerToolbar={false}
        initialDate={startDate.toISOString()}
        events={events}
        allDaySlot={false}
        eventClick={(info) => {
          setSelectedEvent(info.event); // Save the clicked event data
          setIsModalOpen(true); // Open the modal
        }}
      />

      {selectedEvent && (
        <EventModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            mutate();
          }}
          data={data.result[parseInt(selectedEvent.id)]}
        />
      )}
    </div>
  );
};

const getColorForAttendanceStatus = (attendanceStatus: AttendanceStatus, startTime: string) => {
  const currentTime = new Date();

  switch (attendanceStatus) {
    case AttendanceStatus.Present:
      return '#10B981'; // Green color for Present
    case AttendanceStatus.AllowAbsent:
      return '#3B82F6'; // Blue color for AllowAbsent
    case AttendanceStatus.Absent:
      return '#EF4444'; // Red color for Absent
    default:
      return ''; // Default color or handle other cases if needed
  }
};

export default WorkSchedule;
