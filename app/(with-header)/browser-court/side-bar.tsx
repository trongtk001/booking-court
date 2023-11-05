import Rating from '@/Components/rating';
import React from 'react';
import { twMerge } from 'tailwind-merge';

export interface ISideBarProps {
  className?: string;
}

const className = {
  container: 'mt-7',
  title: 'mb-3 font-semibold text-lg leading-7',
  itemLocation: {
    root: 'h-8 mb-1',
    checkbox: 'w-4 h-4 mr-3 text-primary' + ' focus:ring-primary',
    label: 'font-light text-sm leading-7',
  },
  seeMore: 'font-light text-sm text-primary leading-7 hover:cursor-pointer',
  priceInput:
    'appearance-none bg-transparent [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-black/25 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-[50px] [&::-webkit-slider-thumb]:w-[50px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-purple-500',
  rating: 'mb-2',
};

export default function SideBar(props: ISideBarProps) {
  return (
    <div className={twMerge(className.container, props.className)}>
      <div>
        <h5 className={className.title}>Location</h5>
        <div className={className.itemLocation.root}>
          <input type="checkbox" name="" id="" className={className.itemLocation.checkbox} />
          <span className={className.itemLocation.label}>Thu Duc</span>
        </div>
        <div className={className.itemLocation.root}>
          <input type="checkbox" name="" id="" className={className.itemLocation.checkbox} />
          <span className={className.itemLocation.label}>Tan Binh</span>
        </div>
        <div className={className.itemLocation.root}>
          <input type="checkbox" name="" id="" className={className.itemLocation.checkbox} />
          <span className={className.itemLocation.label}>District 1</span>
        </div>
        <div className={className.itemLocation.root}>
          <input type="checkbox" name="" id="" className={className.itemLocation.checkbox} />
          <span className={className.itemLocation.label}>District 9</span>
        </div>
        <p className={className.seeMore}>See more</p>
      </div>
      <div>
        <h5 className={className.title}>Price</h5>
        <div className="flex flex-row items-center gap-2">
          <span>0đ</span>
          <input className={className.priceInput} type="range" min="0" max="100" defaultValue="0" name="" id="" />
          <span>1trđ</span>
        </div>
      </div>
    </div>
  );
}
