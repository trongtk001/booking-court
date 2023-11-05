'use client';
import Button from '@/Components/button';
import { publicRoutes } from '@/routes';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import { toast } from 'react-toastify';

const className = {
  label: 'h-4 font-semibold text-xs leading-4 text-textLight mb-1 capitalize',
  input: 'w-[350px] h-10 outline-none rounded-lg border-grayLight border-[1px] mb-5  ' + 'focus:ring-primaryLight focus:ring-2 focus:border-none',

  loginLink: {
    text: 'w-[350px] h-5 font-normal text-sm leading-5 text-textLight text-center mt-9',
    link: 'text-primaryLink font-bold',
  },
};
interface FormData {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
  dob: string;
  gender: number;
}

type Props = {};

const RegisterForm = (props: Props) => {
  const initialFormData: FormData = {
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
    dob: '',
    gender: 0,
  };
  const router = useRouter();
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    let parsedValue: string | number = value;

    if (type === 'radio') {
      parsedValue = parseInt(value);
    }

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: parsedValue,
    }));

    setMessage('');
  };

  async function handleSumit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const { userName, email, password, confirmPassword, dob, gender } = formData;

    // Validate the form data, e.g., check if password and confirm password match, check date of birth, etc.
    if (password !== confirmPassword) {
      setMessage('Password and confirm password do not match');
      return;
    }

    if (new Date(dob) > new Date()) {
      setMessage('Date of birth is invalid');
      return;
    }

    const data = {
      userName,
      email,
      password,
      dob,
      gender,
      role: 2,
    };

    const res = await fetch('/api/Register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const resBody = await res.json();

    if (res.status === 400) {
      setMessage(resBody.message);
    }

    if (res.ok) {
      toast.success('Register success');
      router.push('/login?message=Register success');
    }
  }

  return (
    <form onSubmit={handleSumit} action="#" className="flex flex-col">
      <label className={className.label} htmlFor="txtUserName">
        User Name
      </label>
      <input required onChange={handleChange} name="userName" className={className.input} type="text" id="txtUserName" placeholder="user name" />

      <label className={className.label} htmlFor="txtEmail">
        Email
      </label>
      <input required onChange={handleChange} name="email" className={className.input} type="text" id="txtEmail" placeholder="name@example.com" />

      <label className={className.label} htmlFor="txtPassword">
        Password
      </label>
      <input
        required
        onChange={handleChange}
        name="password"
        className={className.input}
        type="password"
        id="txtPassword"
        placeholder="min. 8 characters"
        minLength={8}
      />

      <label className={className.label} htmlFor="txtConfirmPassword">
        Confirm Password
      </label>
      <input
        required
        onChange={handleChange}
        name="confirmPassword"
        className={className.input}
        type="password"
        id="txtConfirmPassword"
        placeholder="min. 8 characters"
        minLength={8}
      />

      <label className={className.label} htmlFor="txtDob">
        Date Of Birth
      </label>
      <input required onChange={handleChange} name="dob" className={'register_date_input ' + className.input} type="date" id="txtDob" />

      <div className="flex flex-row items-center">
        <input
          onChange={handleChange}
          className="border-grayLight border-2 text-primary mr-3 focus:ring-primary"
          type="radio"
          name="gender"
          value={0}
        />
        <span className="ml-[14px]">Male</span>
        <input
          onChange={handleChange}
          className="ml-11 border-grayLight border-2 text-primary mr-3 focus:ring-primary"
          type="radio"
          name="gender"
          value={1}
        />
        <span className="ml-[14px]">Female</span>
        <input
          onChange={handleChange}
          className="ml-11 border-grayLight border-2 text-primary mr-3 focus:ring-primary"
          type="radio"
          name="gender"
          value={2}
        />
        <span className="ml-[14px]">Other</span>
      </div>

      <div className="flex flex-row mt-8">
        <input name="agreePolicy" className="w-5 h-5 rounded border-grayLight border-2 text-primary mr-3 focus:ring-primary" type="checkbox" />
        <div className="w-[299px] text-sm font-normal leading-5 colo">
          <span>
            By clicking “Register” you agree to the <br /> tennique{' '}
          </span>
          <Link className="underline underline-offset-1" href={''}>
            Terms & Conditions
          </Link>
          <span> and </span>
          <Link className="underline underline-offset-1" href={''}>
            Privacy Policy. *
          </Link>
        </div>
      </div>

      {message && <p className="w-full mt-2 p-1 text-red-500 ">{message}</p>}

      <Button className="mt-9" type="submit">
        Register
      </Button>

      <p className={className.loginLink.text}>
        Already have an account?&nbsp;
        <Link className={className.loginLink.link} href={publicRoutes.login}>
          Sign up
        </Link>
      </p>
    </form>
  );
};

export default RegisterForm;
