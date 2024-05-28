import { useState } from 'react';

import { useFormikContext } from 'formik';

import Input, { InputProps } from './Input';

export interface PasswordInputProps<Values extends object>
  extends Omit<InputProps<Values>, 'icon' | 'type'> {}

export default function PasswordInput<Values extends object>({
  name,
  ...props
}: PasswordInputProps<Values>) {
  const { handleChange, values } = useFormikContext<Values>();
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow((prevState) => !prevState);
  };

  return (
    <Input
      {...props}
      onChange={handleChange}
      name={name as string | undefined}
      value={name && values[name]}
      icon="tabler:lock"
      onIconClick={handleClick}
      type={show ? 'text' : 'password'}
    />
  );
}
