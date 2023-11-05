'use client';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { GetMonth } from '@/utils/util';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import dayjs, { Dayjs } from 'dayjs';
import { useWokingSlot } from '@/hooks';
import Button from '@/Components/button';
import CreateWorkingSlotModal from './modal';

const className = {
  dayOfWeek: {
    text: 'h-10 text-center text-lg font-norma leading-10 ',
  },
};

export default function Calendar() {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [currentMonth, setCurrentMonth] = useState(GetMonth());
  const [openModal, setOpenModal] = useState(false);

  const { data } = useWokingSlot(currentMonth.firstDate.toISOString(), currentMonth.lastDate.toISOString());

  useEffect(() => {
    setCurrentMonth(GetMonth(monthIndex));
  }, [monthIndex]);

  const handleLeftArrow = () => {
    setMonthIndex((prevState) => prevState - 1);
  };

  const handleRightArrow = () => {
    setMonthIndex((prevState) => prevState + 1);
  };

  const handleCLoseModal = () => {
    setOpenModal(false);
  };

  const getEventCountForDay = (day: Dayjs): Array<any> => {
    // Filter the events in the data array to find events that match the day
    let eventsForDay = [];
    if (data && data.result.length > 0) {
      eventsForDay = data.result.filter((event: any) => dayjs(event.startTime).isSame(day, 'day'));
    }
    return eventsForDay;
  };

  return (
    <div className="m-5">
      <div className="flex justify-end">
        <Button onClick={() => setOpenModal(true)} className=" my-5" size={'small'}>
          Create
        </Button>
      </div>
      <CreateWorkingSlotModal isOpen={openModal} onClose={handleCLoseModal} />

      <div className="text-center"></div>
      <div className="flex place-content-center h-20 rounded-t-lg border border-primary">
        <button className="h-10 w-10 my-auto hover:opacity-60 hover:cursor-pointer">
          <ChevronLeftIcon onClick={handleLeftArrow} className="h-10 w-10  inline-block " />
        </button>
        <h3 className="w-40 select-none inline-block text-center leading-20 font-bold text-3xl ">
          {dayjs(new Date(dayjs().year(), monthIndex)).format('MMM YYYY')}
        </h3>
        <button className="h-10 w-10 my-auto hover:opacity-60 hover:cursor-pointer">
          <ChevronRightIcon onClick={handleRightArrow} className="h-10 w-10  inline-block " />
        </button>
      </div>

      <div className="grid grid-cols-7 divide-x border">
        <div className={className.dayOfWeek.text}>Sun</div>
        <div className={className.dayOfWeek.text}>Mon</div>
        <div className={className.dayOfWeek.text}>Tue</div>
        <div className={className.dayOfWeek.text}>Wed</div>
        <div className={className.dayOfWeek.text}>Thu</div>
        <div className={className.dayOfWeek.text}>Fri</div>
        <div className={className.dayOfWeek.text}>Sat</div>
      </div>

      <div className="h-[35rem] grid grid-rows-5 flex-1 divide-y border rounded-b-lg">
        {currentMonth.daysMatrix.map((row) => (
          <div className="grid grid-cols-7 divide-x" key={uuidv4()}>
            {row.map((day) => (
              <div className={`text-center  ${Number(day.format('MM')) !== monthIndex + 1 ? 'bg-gray-100 opacity-60' : ''}`} key={uuidv4()}>
                {day.format('DD')}
                {getEventCountForDay(day).length >= 1 && (
                  <div className="pt-4 overflow-y-scroll h-16 text-white w-full text-xs flex flex-col gap-1 items-center justify-center">
                    {getEventCountForDay(day).map((item, i) => (
                      <div className="bg-primary h-5" key={i}>
                        {dayjs(item.startTime).format('HH:mm') + ' - ' + dayjs(item.endTime).format('HH:mm')}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
