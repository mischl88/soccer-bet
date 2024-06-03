import { ComponentProps } from 'react';

import Loader from '@/components/Loader';

interface ButtonProps extends ComponentProps<'button'> {
  label: string;
  isLoading?: boolean;
}

export default function Button({
  label,
  disabled,
  isLoading = false,
  ...rest
}: ButtonProps) {
  return (
    <button
      className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
      disabled={isLoading || disabled}
      {...rest}
    >
      {isLoading || disabled ? <Loader /> : label}
    </button>
  );
}
