'use client';
import Image from 'next/image';
import { Carousel, CustomFlowbiteTheme } from 'flowbite-react';
import { twMerge } from 'tailwind-merge';
import image from '@/public/login_background.svg';
import image2 from '@/public/login_background_2.svg';

const style = {
  image: 'hover:cursor-default select-none',
};

export interface ILoginBackgroundProps {
  className?: string;
}

const customTheme: CustomFlowbiteTheme['carousel'] = {
  scrollContainer: {
    snap: 'rounded-none',
  },
};

export default function LoginBackground({ className }: ILoginBackgroundProps) {
  return (
    <Carousel theme={customTheme} className={twMerge('relative ', className)} slide leftControl={<></>} rightControl={<></>}>
      <Image src={image} alt="" width={815} height={887} />
      <Image src={image2} alt="" width={815} height={887} />
    </Carousel>
  );
}
