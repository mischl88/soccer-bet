import DateTimePicker, { DateTimePickerProps } from "react-datetime-picker";

import { useColorMode } from "@chakra-ui/react";

import Input, { InputFieldProps } from "./Input";

interface InputDatePickerProps extends Omit<InputFieldProps, "value" | "onChange"> {
  id: string;
  label: string;
  onChange: DateTimePickerProps["onChange"]
  value: Date | null,
}

export default function InputDatePicker({
                                          id,
                                          label,
                                          isRequired,
                                          onChange,
                                          value,
                                          ...props
                                        }: InputDatePickerProps) {
  const { colorMode } = useColorMode();

  const handleChange = (value: Date | null) => {
    onChange && onChange(value);
  };

  return (
    <>
      <Input
        id={id}
        label={label}
        as={(props) => <DateTimePicker {...props} className={`${props.className} ${colorMode}`}
                                       required={isRequired}
                                       format="y-MM-dd hh:mm" onChange={handleChange}
                                       value={value} />}
        isRequired
        {...props}
      />
    </>
  );
}
