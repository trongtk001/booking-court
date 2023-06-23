import Carousel, { CustomFlowbiteTheme } from '@/Components/flow-bite/carousel';
import image from '@/public/login_background.svg';
import image2 from '@/public/login_background_2.svg';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

const style = {
  image: 'hover:cursor-default select-none',
};

export interface ILoginBackgroundProps {
  className?: string;
}

export default function LoginBackground({ className }: ILoginBackgroundProps) {
  return (
    <Carousel
      className={twMerge('relative ', className)}
      slide
      leftControl={<div className="hidden"></div>}
      rightControl={<div className="hidden"></div>}
    >
      <Image loading="eager" src={image} alt="" width={815} height={887} />
      <Image loading="eager" src={image2} alt="" width={815} height={887} />
    </Carousel>
  );
}
