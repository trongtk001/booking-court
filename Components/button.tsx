import { cva, VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

//"",
const button = cva(
  'button rounded-lg gap-2 relative text-white duration-300 shadow-sm hover:duration-100 active:top-[1px] active:shadow-buttonShadow active:shadow-slate-500',
  {
    variants: {
      intent: {
        primary: 'bg-primary hover:bg-primaryDark active:bg-primaryLight',
        red: 'bg-red-600 hover:bg-red-700 active:bg-red-500',
        blue: 'bg-blue-600 hover:bg-blue-700 active:bg-blue-500',
      },
      size: {
        small: 'w-40 h-11',
        medium: '',
        large: 'w-[350px] h-11',
      },
      disabled: {
        true: 'opacity-10 cursor-not-allowed',
      },
    },
    defaultVariants: {
      intent: 'primary',
      size: 'large',
    },
  }
);

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof button> {
  disabled?: boolean;
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({ className, intent, size, children, disabled, type, ...props }: IButtonProps) {
  return (
    <>
      <button className={twMerge(button({ intent, size, className, disabled }))} disabled={disabled} type={type} {...props}>
        {children}
      </button>
    </>
  );
}
