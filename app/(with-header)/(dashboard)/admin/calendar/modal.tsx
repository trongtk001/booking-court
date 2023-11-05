import Input from '@/Components/input';
import Modal from '@/Components/modal';
import httpMethods from '@/service/client/fetcher';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const CreateWorkingSlotModal = ({ isOpen, onClose }: Props) => {
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const startTimeDate = new Date(startTime);
    const endTimeDate = new Date(endTime);

    // Check if start time is before end time
    if (startTimeDate.getTime() >= endTimeDate.getTime()) {
      // Start time is after or equal to end time, display an error message or take appropriate action
      toast.error('Start time must be before end time');
      return;
    }

    const res = await httpMethods.post(
      `/WorkingSlotInAMonth/CreateListWorkingSlotInAmonth/${startTimeDate.toISOString()}/${endTimeDate.toISOString()}`
    );

    if (res.status === 'OK') {
      toast.success('Create working slot successfully');
      setStartTime('');
      setEndTime('');
    }


    // Close the modal after form submission
    onClose();
  };

  return (
    <Modal isOpen={isOpen} closeModal={() => onClose()}>
      <div className="flex flex-col gap-3 w-full transform overflow-hidden rounded-2xl bg-white py-6 px-10 text-left align-middle shadow-xl">
        <h3 className="text-xl font-bold">Create Working Slot</h3>
        <form className="w-[30rem]" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="startTime" className=" text-lg font-bold mb-2">
              Start Time:
            </label>
            <Input
              type="datetime-local"
              id="startTime"
              name="startTime"
              className="w-full border rounded-lg p-2"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="endTime" className="text-lg font-bold mb-2">
              End Time:
            </label>
            <Input
              type="datetime-local"
              id="endTime"
              name="endTime"
              className="w-full border rounded-lg p-2"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
            />
          </div>
          <div className="flex justify-end">
            <button type="button" className="px-4 py-2 mr-2 border rounded-md" onClick={() => onClose()}>
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">
              Create
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default CreateWorkingSlotModal;
