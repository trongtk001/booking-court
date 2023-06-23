import React from 'react';
import { twMerge } from 'tailwind-merge';
import LoginForm from './login-form';

export interface ILoginProps {}

export default function Login(props: ILoginProps) {
  const className = {
    container: 'w-[366px] flex flex-col items-center',
    title: 'w-[350px] h-[82px] font-bold text-6xl leading-[82px] mb-1',
    description: 'w-[350px] h-10 font-normal text-sm leading-5 text-textLight mb-[30px]',
  };

  return (
    <div className={twMerge(className.container)}>
      <h1 className={className.title}>Login</h1>
      <p className={className.description}>Sign in with your data that you entered during your registration.</p>
      <LoginForm />
    </div>
  );
}
