import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

//"",
const button = cva(
  [
    "rounded-lg gap-2 relative duration-300 shadow-sm hover:duration-100 active:top-[1px] active:shadow-buttonShadow active:shadow-slate-500",
  ],
  {
    variants: {
      intent: {
        primary: "bg-primary hover:bg-primaryDark active:bg-primaryLight",
      },
    },
  }
);

export interface IButtonProps {
  classname?: string;
  style?: React.CSSProperties;
  onclick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
}

export default function Button({ classname, style, onclick, disabled, children, type }: IButtonProps) {
  const className = twMerge(
    ` bg-primary w-[350px] h-11 rounded-lg gap-2 relative duration-300 shadow-sm text-white
        hover:bg-primaryDark hover:duration-100
        active:top-[1px] active:bg-primaryLight active:shadow-buttonShadow active:shadow-slate-500
        ` + classname
  );

  return (
    <>
      <button style={style} className={className} onClick={onclick} disabled={disabled} type={type}>
        {children}
      </button>
    </>
  );
}
