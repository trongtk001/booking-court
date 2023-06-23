'use client';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { GetMonth } from './util';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import dayjs from 'dayjs';
import { getSession } from 'next-auth/react';

const className = {
  dayOfWeek: {
    text: 'h-10 text-center text-lg font-norma leading-10',
  },
};

export default function Calendar() {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [currentMonth, setCurrentMonth] = useState(GetMonth());

  useEffect(() => {
    setCurrentMonth(GetMonth(monthIndex));
  }, [monthIndex]);

  const handleLeftArrow = () => {
    setMonthIndex((prevState) => prevState - 1);
  };

  const handleRightArrow = () => {
    setMonthIndex((prevState) => prevState + 1);
  };

  return (
    <div className="m-5">
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

      <div className="grid grid-rows-5 flex-1 divide-y border rounded-b-lg">
        {currentMonth.map((row) => (
          <div className="grid grid-cols-7 divide-x" key={uuidv4()}>
            {row.map((day) => (
              <div
                className={`text-center h-36 ${Number(day.format('MM')) !== monthIndex + 1 ? 'bg-gray-100 opacity-60' : ''}`}
                key={uuidv4()}
              >
                {day.format('DD')}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
