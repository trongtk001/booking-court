'use client';
import React from 'react';
import courtImage from '@/public/assets/court.svg';
import { UserGroupIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import { Court } from '@/model';
import Button from './button';
import { useRouter } from 'next/navigation';

export interface ICourtCardProps {
  className?: string;
  item: Court;
}

const style = {
  container: 'w-[22rem] h-[16rem] flex flex-col rounded-lg border border-gray-200 bg-white shadow-md ',
  image: 'rounded-t-lg ',
  content: {
    base: 'flex h-full flex-col justify-center gap-4 px-2 py-4 ',
    title: 'w-56 text-lg font-bold leading-6 inline-block ',
  },
  text: 'font-semibold text-xs leading-4 ',
};

export default function CourtCard({ className, item }: ICourtCardProps) {
  const router = useRouter();
  const handleButtonClick = () => {
    router.push(`/booking-confirmation/${item.id}`);
  };

  return (
    <div className={twMerge(style.container, className)}>
      <Image className="rounded-t-lg w-[22rem] h-[9rem] object-cover" src={item.imageURI || courtImage} alt="court" width="350" height="160" />
      <div className="flex">
        <div className={style.content.base}>
          <div>
            <h5 className={style.content.title}>{item.courtCode}</h5>
            <p>{item.description}</p>
          </div>

          <div className="flex flex-row justify-between">
            <div className="flex flex-row items-center text-center">
              <UserGroupIcon className="w-3 h-3 mb-1" />
              <div className={style.text + 'ml-2'}>{item.totalPerson} person</div>
              <div className="w-1 h-1 rounded-full bg-primary mx-4"></div>
              <div className={style.text + ''}>{item.price} VND/h</div>
            </div>
          </div>
        </div>
        <div className="flex justify-end items-end p-3">
          <Button onClick={handleButtonClick} className="w-20 h-6 rounded-md">
            Reserve
          </Button>
        </div>
      </div>
    </div>
  );
}
