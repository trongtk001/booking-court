"use client";
import * as React from "react";
import Image from "next/image";
import { Carousel, CustomFlowbiteTheme } from "flowbite-react";
import { twMerge } from "tailwind-merge";

export interface ILoginBackgroundProps {
  className?: string;
}

const customTheme: CustomFlowbiteTheme["carousel"] = {
  scrollContainer: {
    snap: "rounded-none",
  },
};

export default function LoginBackground({ className }: ILoginBackgroundProps) {
  return (
    <Carousel theme={customTheme} className={twMerge("relative", className)} slide leftControl={<></>} rightControl={<></>}>
      <Image className="" src="/login_background.svg" alt="" width={815} height={887} />
      <Image className="" src="/login_background_2.svg" alt="" width={815} height={887} />
    </Carousel>
  );
}
