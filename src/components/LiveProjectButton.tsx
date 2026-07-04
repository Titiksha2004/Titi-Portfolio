import { type AnchorHTMLAttributes, type ButtonHTMLAttributes, type FC } from 'react';

interface LiveProjectButtonProps {
  label?: string;
  className?: string;
  href?: string;
  onClick?: () => void;
}

export const LiveProjectButton: FC<LiveProjectButtonProps> = ({
  label = "Live Project",
  className = "",
  href,
  onClick,
  ...props
}) => {
  const classes = `inline-block text-center rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest transition-colors duration-200 hover:bg-[#D7E2EA]/10 active:scale-95 px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base cursor-pointer ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        onClick={onClick}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {label}
      </a>
    );
  }

  return (
    <button
      className={classes}
      onClick={onClick}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {label}
    </button>
  );
};
