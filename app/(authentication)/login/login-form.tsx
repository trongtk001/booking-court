'use client';
import Button from '@/Components/button';
import { publicRoutes } from '@/routes';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { FormEvent } from 'react';

const className = {
  form: 'flex flex-col',
  label: 'h-4 font-semibold text-xs leading-4 text-textLight mb-1',
  input:
    'w-[350px] h-10 outline-none rounded-lg border-grayLight border-[1px] mb-5 ' +
    'focus:ring-primaryLight focus:ring-2 focus:border-none',
  optional: {
    container: 'h-11 flex',
    keepLogin: 'basis-1/2',
    checkBox: 'w-5 h-5 rounded border-grayLight border-2 text-primary mr-3 focus:ring-primary',
    forgotPassword: 'basis-1/2 text-end font-bold text-sm leading-5 text-primaryLink',
  },
  orTitle: {
    container: 'w-[350px] h-[30px] flex justify-around items-center mt-[18px]',
    title: 'w-7 h[30px] font-bold text-sm leading-5 text-center text-textGray',
    line: 'w-39 h-[1px] bg-grayLight',
  },
  textButton: 'text-white text-lg',
  faceBookButton: {
    button: 'mt-9',
    icon: 'inline-block absolute left-7 top-1/2 transform -translate-y-1/2 text-white',
  },
  googleButton: {
    button: 'mt-[5px]',
    icon: 'inline-block absolute left-7 top-1/2 transform -translate-y-1/2 text-white',
  },
  signUpLink: {
    text: 'w-[350px] h-5 font-normal text-sm leading-5 text-textLight text-center mt-9',
    link: 'text-primaryLink font-bold',
  },
};

export default function LoginForm() {
  const searchParams = useSearchParams();

  async function handleSumit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const target = e.target as any;

    const data = {
      email: String(target.email.value),
      password: String(target.password.value),
    };

    const result = await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: true,
      callbackUrl: searchParams.get('callbackUrl') || '/admin/calendar',
    });
  }

  return (
    <>
      <form onSubmit={handleSumit} className={className.form}>
        <label className={className.label} htmlFor="txtEmail">
          Email
        </label>
        <input className={className.input} name="email" type="email" id="txtEmail" placeholder="name@example.com" required />
        <label className={className.label} htmlFor="txtPassword">
          Password
        </label>
        <input className={className.input} name="password" type="password" id="txtPassword" placeholder="min. 8 characters" />

        <div className={className.optional.container}>
          <div className={className.optional.keepLogin}>
            <input type="checkbox" className={className.optional.checkBox} />
            Keep me log in
          </div>
          <Link href={''} className={className.optional.forgotPassword}>
            Forgot password?
          </Link>
        </div>

        <Button type="submit" intent="primary">
          Login
        </Button>

        <div className={className.orTitle.container}>
          <hr className={className.orTitle.line} />
          <span className={className.orTitle.title}>or</span>
          <hr className={className.orTitle.line} />
        </div>

        <Button className={className.faceBookButton.button} intent="blue">
          <div>
            <Image className={className.faceBookButton.icon} src="/facebook.png" alt="facebook icon" width={32} height={32} />
            <p className={className.textButton}>Continue with Facebook</p>
          </div>
        </Button>

        <Button className={className.googleButton.button} intent="red" type="button">
          <div>
            <Image className={className.googleButton.icon} src="/google_icon.svg" alt="facebook icon" width={45} height={45} />
            <p className={className.textButton}>Continue with Facebook</p>
          </div>
        </Button>

        <p className={className.signUpLink.text}>
          Don’t have an account?{' '}
          <Link className={className.signUpLink.link} href={publicRoutes.register}>
            Sign up
          </Link>
        </p>
      </form>
    </>
  );
}
