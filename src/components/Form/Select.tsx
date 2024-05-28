import { ComponentProps } from 'react';

import { Icon } from '@iconify/react';
import { useFormikContext } from 'formik';
import clsx from 'clsx';

interface SelectFieldProps<Values extends object>
  extends Omit<ComponentProps<'select'>, 'name'> {
  label: string;
  name?: keyof Values;
  options: { name: string; value: string }[];
}

export default function SelectField<Values extends object>({
  label,
  name,
  options,
  className,
  ...props
}: SelectFieldProps<Values>) {
  const { handleChange, values } = useFormikContext<Values>();

  return (
    <div className="mb-4.5">
      <label className="mb-2.5 block text-black dark:text-white">
        {' '}
        {label}{' '}
      </label>

      <div className="relative z-20 bg-transparent dark:bg-form-input">
        <select
          name={name as string | undefined}
          value={name && values[name]}
          onChange={handleChange}
          className={clsx(
            'relative z-20 w-full appearance-none rounded border border-stroke b" "ransparent py-3 px" "outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary',
            {
              'text-black dark:text-white': Boolean(name && values[name]),
            },
          )}
   "relative z-20 w-full appearance-none rounded border border-stroke b\" \"ransparent py-3 px\" \"outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"    {option.name}
            "text-black dark:text-white"    </select>

        <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2">
          <Icon icon="iconamoon:arrow-down-2-light" fontSize={23} />
        </span>
      </div>
    </div>
  );
}
