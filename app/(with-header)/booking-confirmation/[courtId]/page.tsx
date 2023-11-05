'use client';

import Button from '@/Components/button';
import Input from '@/Components/input';
import Loading from '@/Components/loading';
import { Court } from '@/model';
import { publicRoutes } from '@/routes';
import httpMethods from '@/service/client/fetcher';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import dayjs from 'dayjs';
import { useSession } from 'next-auth/react';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import useSWR from 'swr';

type Props = {};

const BookingConfirmPage = ({}: Props) => {
  const router = useRouter();
  const params = useParams();
  const user = useSession().data?.user;
  const courtId = params?.courtId;
  const { data, error, isLoading } = useSWR('/court/' + courtId);
  const court: Court = data?.result;
  const [selectedDate, setSelectedDate] = useState(new Date().toLocaleDateString('en-CA'));
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [rangeBookingTime, setRangeBookingTime] = useState(0);

  const handleDateChange = (e: any) => {
    setSelectedDate(e.target.value);
  };

  const handleStartTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartTime(e.target.value);
  };

  const handleEndTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEndTime(e.target.value);
  };

  const handleBooking = async () => {
    if (!user) {
      router.push(publicRoutes.login);
      return;
    }

    if (!selectedDate || !startTime || !endTime) {
      toast.error('Please fill in all required fields.');
      return;
    }

    const data = {
      startTime: dayjs(`${selectedDate}T${startTime}:00`).toISOString(),
      sendTime: dayjs(`${selectedDate}T${endTime}:00`).toISOString(),
      totalPrice: court.price * rangeBookingTime,
      userId: user?.id,
    };

    const res = await httpMethods.post('/Reservation', { data });
    if (res.status === 'OK') {
      toast.success('Booking successfully');
      router.push(publicRoutes.browserCourt);
    }
  };

  useEffect(() => {
    calculateRangeBookingTime();
  }, [startTime, endTime]);

  const calculateRangeBookingTime = () => {
    if (startTime && endTime) {
      const startTimeObj = dayjs(`${selectedDate}T${startTime}:00`);
      const endTimeObj = dayjs(`${selectedDate}T${endTime}:00`);
      const diff = endTimeObj.diff(startTimeObj, 'hour');
      setRangeBookingTime(diff > 0 ? diff : 0);
    } else {
      setRangeBookingTime(0);
    }
  };

  if (!court || isLoading) {
    return <Loading />;
  }

  return (
    <div className="container mx-auto h-[80vh]">
      <div className="flex items-center">
        <ChevronLeftIcon className="w-7 h-7 mb-1" />
        <h1 className="ml-2 text-3xl font-bold">Booking Confirmation</h1>
      </div>
      <div className="flex flex-wrap items-center mt-8">
        <div className="w-full md:w-1/2 mb-4 md:mb-0 ">
          <h3 className="text-xl font-bold">Booking detail</h3>

          <div className="flex">
            <div className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-10">
              <label htmlFor="date" className="text-lg font-bold mb-2">
                Date:
              </label>
              <Input
                type="date"
                id="date"
                name="date"
                className="w-full border rounded-lg p-2 mb-4"
                value={selectedDate}
                onChange={handleDateChange}
              />

              <label htmlFor="time" className="text-lg font-bold mb-2">
                Time:
              </label>
              <div className="flex gap-2">
                <Input
                  type="time"
                  id="time"
                  name="time"
                  className="w-full border rounded-lg p-2 mb-4"
                  value={startTime}
                  onChange={handleStartTimeChange}
                  step={3600}
                />
                <input
                  type="time"
                  id="time"
                  name="time"
                  className="w-full border rounded-lg p-2 mb-4"
                  value={endTime}
                  onChange={handleEndTimeChange}
                  step={3600}
                />
              </div>
              <div className="mt-20 ">
                <div className="w-full h-14 rounded-md border focus-within:border-primary flex justify-between items-center p-4">
                  <p>VNPay</p>
                  <input name="payment" type="radio" className="text-primary focus:ring-primary" />
                </div>
                <div className="w-full h-14 rounded-md border focus-within:border-primary flex justify-between items-center p-4 mt-2">
                  <p>Credit/Debit card</p>
                  <input name="payment" type="radio" className="text-primary focus:ring-primary" />
                </div>
                <div className="w-full h-14 rounded-md border focus-within:border-primary flex justify-between items-center p-4 mt-2">
                  <p>Cash</p>
                  <input name="payment" type="radio" className="text-primary focus:ring-primary" />
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 md:ml-2 mt-1">
              <label htmlFor="court" className="text-lg font-bold mb-2">
                Court Code
              </label>
              <p>{court.courtCode}</p>

              <label htmlFor="description" className="text-lg font-bold mb-2 mt-4 block">
                Description
              </label>
              <p>{court.description}</p>

              <label htmlFor="totalPerson" className="text-lg font-bold mb-2 mt-4 block">
                Total Persons
              </label>
              <p>{court.totalPerson}</p>
            </div>
          </div>
        </div>
        <div className=" w-[35rem] md:w-1/2 md:pl-8">
          <div className="h-[27rem] w-[35rem] border border-gray-300 shadow-md rounded-md flex flex-col p-4">
            <img className="h-60 rounded-md object-cover " src={court.imageURI} alt={court.courtCode} />
            <div className="p-4 gap-2 divide-y">
              <div>
                <h3 className="text-lg font-bold">Price details</h3>
                <p className="text-base font-semibold">
                  Price <span className="float-right">{court.price}</span>
                </p>
                <p className="text-base font-semibold">
                  Discount <span className="float-right">-0</span>
                </p>
              </div>
              <p className="text-lg font-bold pt-2 mt-2">
                Total <span className="float-right">{court.price * rangeBookingTime}</span>
              </p>
            </div>
          </div>
          <Button onClick={handleBooking} className="mt-8 ">
            Check Out
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmPage;
