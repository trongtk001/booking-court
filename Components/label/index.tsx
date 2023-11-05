import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const label = cva('label  text-textLight mb-1', {
  variants: {
    intent: {
      primary: 'text-black bg-white',
    },
    size: {
      small: 'h-4 leading-4',
    },
    font: {
      normal: 'font-normal',
      bold: 'font-bold',
      semiBold: 'font-semibold',
    },
    text: {
      xs: 'text-xs',
    },
  },
  defaultVariants: {
    intent: 'primary',
    size: 'small',
    font: 'semiBold',
    text: 'xs',
  },
});

interface IProps extends React.LabelHTMLAttributes<HTMLLabelElement>, VariantProps<typeof label> {
  children: React.ReactNode;
}

const Label = ({ className, intent, size, font, text, children }: IProps) => {
  return <label className={twMerge(label({ intent, size, font, text, className }))}>{children}</label>;
};

export default Label;
