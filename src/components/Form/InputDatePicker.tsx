import { useEffect } from 'react';

import flatpickr from 'flatpickr';
import { useFormikContext } from 'formik';

import Input, { InputProps } from './Input';

interface InputDatePickerProps<Values extends object>
  extends Omit<InputProps<Values>, 'value' | 'onChange'> {
  value: Date | null;
}

export default function InputDatePicker<Values extends object>({
  name,
  ...props
}: InputDatePickerProps<Values>) {
  const { handleChange, values } = useFormikContext<Values>();
  useEffect(() => {
    // Init flatpickr
    flatpickr('.form-datepicker', {
      mode: 'single',
      static: true,
      monthSelectorType: 'static',
      dateFormat: 'M j, Y',
      prevArrow:
        '<svg className="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M5.4 10.8l1.4-1.4-4-4 4-4L5.4 0 0 5.4z" /></svg>',
      nextArrow:
        '<svg className="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M1.4 10.8L0 9.4l4-4-4-4L1.4 0l5.4 5.4z" /></svg>',
    });
  }, []);

  return (
    <Input
      {...props}
      name={name as string | undefined}
      value={name && values[name]}
      className="form-datepicker w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
      placeholder="mm/dd/yyyy"
      data-class="flatpickr-right"
      icon="tabler:calendar"
    />
  );
}
