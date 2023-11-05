import React from 'react';
import Calendar from './calendar';
import { useWokingSlot } from '@/hooks';

type Props = {};

const CalendarPage = (props: Props) => {
  return (
    <div className="container">
      <h5 className="capitalize text-2xl font-bold mb-8">calendar</h5>
      <Calendar />
    </div>
  );
};

export default CalendarPage;
