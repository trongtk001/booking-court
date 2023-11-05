import { cva, VariantProps } from 'class-variance-authority';
import React from 'react';
import { twMerge } from 'tailwind-merge';

const select = cva(' outline-none rounded-lg border-[1px] mb-5 focus:ring-2 focus:border-none px-3 py-2', {
  variants: {
    intent: {
      primary: 'border-grayLight focus:ring-primaryLight',
    },
    selectSize: {
      small: 'w-[350px] h-10',
    },
  },
  defaultVariants: {
    intent: 'primary',
    selectSize: 'small',
  },
});

const option = cva('', {
  variants: {
    intent: {
      primary: 'caret-primary',
    },
  },
  defaultVariants: {
    intent: 'primary',
  },
});

interface IProps extends React.SelectHTMLAttributes<HTMLSelectElement>, VariantProps<typeof select> {
  helperText?: string;
}

interface IOptionProps extends React.OptionHTMLAttributes<HTMLOptionElement>, VariantProps<typeof option> {}

const SelectComponent = ({ helperText, intent, selectSize, className, children, ...props }: IProps) => {
  return (
    <select {...props} className={twMerge(select({ intent, selectSize, className }))}>
      {children}
    </select>
  );
};

const Option = ({ intent, className, children, ...props }: IOptionProps) => {
  return (
    <option className={option({ intent, className })} {...props}>
      {children}
    </option>
  );
};

export const Select = Object.assign(SelectComponent, { Option });
