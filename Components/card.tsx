'use client';
import React from 'react';
import courtImage from '@/public/assets/court.svg';
import paperAirPlane from '@/public/assets/paper-airplane.svg';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import Rating from './rating';

export interface ICourtCardProps {
  className?: string;
}

const className = {
  container: 'w-[350px] h-[239px] flex flex-col rounded-lg border border-gray-200 bg-white shadow-md ',
  image: 'rounded-t-lg ',
  content: {
    base: 'flex h-full flex-col justify-center gap-4 px-2 py-4 ',
    title: 'w-56 text-lg font-bold leading-6 inline-block ',
  },
  text: 'font-semibold text-xs leading-4 ',
};

export default function CourtCard(props: ICourtCardProps) {
  return (
    <div className={twMerge(className.container, props.className)}>
      <Image className="rounded-t-lg" src={courtImage} alt="court" />
      <div className={className.content.base}>
        <div>
          <h5 className={className.content.title}>Dong Que Tennis Court</h5>
          <div className="flex h-6 items-start gap-[1.22px] float-right">
            <Rating totalStar={5} filledStar={3} />
          </div>
        </div>

        <div className="flex flex-row items-center text-center">
          <Image className="w-3 h-3" src={paperAirPlane} alt="paper air plane" />
          <div className={className.text + 'ml-2'}>Thu duc</div>
          <div className="w-1 h-1 rounded-full bg-primary mx-4"></div>
          <div className={className.text + ''}>300.000đ min sum</div>
          <div className={twMerge(className.text, 'ml-14 font-bold leading-[17px]')}>153 reviews</div>
        </div>
      </div>
    </div>
  );
}
