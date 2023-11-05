import { cva, VariantProps } from 'class-variance-authority';
import React, { Children } from 'react';
import { twMerge } from 'tailwind-merge';

const input = cva(' outline-none rounded-lg border-[1px] mb-5 focus:ring-2 focus:border-none px-3 py-2', {
  variants: {
    intent: {
      primary: 'border-grayLight focus:ring-primaryLight',
    },
    inputSize: {
      small: 'w-[350px] h-10',
    },
  },
  defaultVariants: {
    intent: 'primary',
    inputSize: 'small',
  },
});

interface IProps extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof input> {
  helperText?: string;
}

const Input = ({ helperText, intent, inputSize, className, ...props }: IProps) => {
  return <input {...props} className={twMerge(input({ intent, inputSize, className }))} />;
};

export default Input;
