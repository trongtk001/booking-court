import Button from "@/Components/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

export interface ILoginProps {
  className?: string;
}

export default function Login(props: ILoginProps) {
  const className = {
    container: "w-[366px] flex flex-col items-center",
    title: "w-[350px] h-[82px] font-bold text-6xl leading-[82px] mb-1",
    description: "w-[350px] h-10 font-normal text-sm leading-5 text-textLight mb-[30px]",
    form: "flex flex-col",
    label: "h-4 font-semibold text-xs leading-4 text-textLight mb-1",
    input:
      "w-[350px] h-10 outline-none rounded-lg border-grayLight border-[1px] mb-5 " +
      "focus:ring-primaryLight focus:ring-2 focus:border-none",
    optional: {
      container: "h-11 flex",
      keepLogin: "basis-1/2",
      checkBox: "w-5 h-5 rounded border-grayLight border-2 text-primary mr-3 focus:ring-primary",
      forgotPassword: "basis-1/2 text-end font-bold text-sm leading-5 text-primaryLink",
    },
    orTitle: {
      container: "w-[350px] h-[30px] flex justify-around items-center mt-[18px]",
      title: "w-7 h[30px] font-bold text-sm leading-5 text-center text-textGray",
      line: "w-39 h-[1px] bg-grayLight",
    },
    textButton: "text-white text-lg",
    faceBookButton: {
      button: "bg-blue-600 hover:bg-blue-700 active:bg-blue-500 mt-9",
      icon: "inline-block absolute left-7 top-1/2 transform -translate-y-1/2 text-white",
    },
    googleButton: {
      button: "bg-red-600 hover:bg-red-700 active:bg-red-500 mt-[5px]",
      icon: "inline-block absolute left-7 top-1/2 transform -translate-y-1/2 text-white",
    },
    signUpLink: {
      text: "w-[350px] h-5 font-normal text-sm leading-5 text-textLight text-center mt-9",
      link: "text-primaryLink font-bold",
    },
  };

  async function handleSumit() {}

  return (
    <div className={twMerge(className.container, props.className)}>
      <h1 className={className.title}>Login</h1>
      <p className={className.description}>Sign in with your data that you entered during your registration.</p>
      <form className={className.form}>
        <label className={className.label} htmlFor="txtEmail">
          Email
        </label>
        <input className={className.input} type="text" id="txtEmail" placeholder="name@example.com" required />
        <label className={className.label} htmlFor="txtPassword">
          Password
        </label>
        <input className={className.input} type="password" id="txtPassword" placeholder="min. 8 characters" />

        <div className={className.optional.container}>
          <div className={className.optional.keepLogin}>
            <input type="checkbox" className={className.optional.checkBox} />
            Keep me log in
          </div>
          <Link href={"/forgotPassword"} className={className.optional.forgotPassword}>
            Forgot password?
          </Link>
        </div>

        <Button type="submit">Login</Button>

        <div className={className.orTitle.container}>
          <hr className={className.orTitle.line} />
          <span className={className.orTitle.title}>or</span>
          <hr className={className.orTitle.line} />
        </div>

        <Button classname={className.faceBookButton.button}>
          <div>
            <Image className={className.faceBookButton.icon} src="/facebook.png" alt="facebook icon" width={32} height={32} />
            <p className={className.textButton}>Continue with Facebook</p>
          </div>
        </Button>

        <Button classname={className.googleButton.button}>
          <div>
            <Image className={className.googleButton.icon} src="/google_icon.svg" alt="facebook icon" width={45} height={45} />
            <p className={className.textButton}>Continue with Facebook</p>
          </div>
        </Button>

        <p className={className.signUpLink.text}>
          Don’t have an account?{" "}
          <Link className={className.signUpLink.link} href={"/authentication/register"}>
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}
