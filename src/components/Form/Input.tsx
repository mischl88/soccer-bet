import { ComponentProps } from 'react';

import clsx from 'clsx';
import { useFormikContext } from 'formik';
import { Icon } from '@iconify/react';

export interface InputProps<Values extends object>
  extends Omit<ComponentProps<'input'>, 'name'> {
  label: string;
  icon?: string;
  className?: string;
  name?: keyof Values;
  onIconClick?: () => void;
}

export default function Input<Values extends object>({
  label,
  icon,
  className,
  name,
  onIconClick,
  ...props
}: InputProps<Values>) {
  const { handleChange, values } = useFormikContext<Values>();

  return (
    <div>
      <label className="mb-2.5 block font-medium text-black dark:text-white">
        {label}
      </label>
      <div className="relative">
        <input
          type="text"
          className={clsx(
            'w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary',
            className,
          )}
          onChange={handleChange}
          name={name as string | undefined}
          value={name && values[name]}
          {...props}
        />
        {icon && (
          <div
            onClick={onIconClick}
            className={clsx(
              'absolute inset-0 left-auto right-5 flex items-center',
              { 'cursor-pointer': !!onIconClick },
              { 'pointer-events-none': !onIconClick },
            )}
          >
            <Icon icon={icon} fontSize={22} />
          </div>
        )}
      </div>
    </div>
  );
}
