import Button from "@/Components/button";
import Link from "next/link";
import * as React from "react";
import { twMerge } from "tailwind-merge";

export interface IRegisterProps {
  className?: string;
}

export default function Register(props: IRegisterProps) {
  const className = {
    label: "h-4 font-semibold text-xs leading-4 text-textLight mb-1",
    input:
      "w-[350px] h-10 outline-none rounded-lg border-grayLight border-[1px] mb-5 " +
      "focus:ring-primaryLight focus:ring-2 focus:border-none",
  };

  return (
    <div className={twMerge("w-[366px]", props.className)}>
      <h1 className="w-[350px] h-[82px] font-bold text-6xl leading-[82px] mb-1">Register</h1>
      <form className="flex flex-col">
        <label className={className.label} htmlFor="txtFirstName">
          Name
        </label>
        <div className="flex flex-row justify-between">
          <input className={twMerge(className.input, "w-[169px]")} type="text" id="txtFirstName" placeholder="First name" />
          <input className={twMerge(className.input, "w-[169px]")} type="text" id="txtLastName" placeholder="Last name" />
        </div>

        <label className={className.label} htmlFor="txtEmail">
          Email
        </label>
        <input className={className.input} type="text" id="txtEmail" placeholder="name@example.com" />

        <label className={className.label} htmlFor="txtPassword">
          Password
        </label>
        <input className={className.input} type="password" id="txtPassword" placeholder="min. 8 characters" />

        <label className={className.label} htmlFor="txtCofirmPassword">
          Cofirm Password
        </label>
        <input className={className.input} type="password" id="txtCofirmPassword" placeholder="min. 8 characters" />

        <label className={className.label} htmlFor="txtPhoneNumber">
          Phone number
        </label>
        <input className={className.input} type="tel" id="txtPhoneNumber" placeholder="0123456789" />

        <div className="flex flex-row items-center">
          <input
            className="border-grayLight border-2 text-primary mr-3 focus:ring-primary"
            type="radio"
            name="role"
            value="player"
          />
          <span className="ml-[14px]">Player</span>
          <input className="ml-11" type="radio" name="role" value="owner" />
          <span className="ml-[14px]">Owner</span>
        </div>

        <div className="flex flex-row mt-8">
          <input className="w-5 h-5 rounded border-grayLight border-2 text-primary mr-3 focus:ring-primary" type="checkbox" />
          <div className="w-[299px] text-sm font-normal leading-5 colo">
            <span>
              By clicking “Register” you agree to the <br /> tennique{" "}
            </span>
            <Link className="underline underline-offset-1" href={""}>
              Terms & Conditions
            </Link>
            <span> and </span>
            <Link className="underline underline-offset-1" href={""}>
              Privacy Policy. *
            </Link>
          </div>
        </div>

        <Button classname="mt-11">Register</Button>
      </form>
    </div>
  );
}
