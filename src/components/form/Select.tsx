import { FormLabel, Select, SelectProps, Text, useColorModeValue } from "@chakra-ui/react";

interface SelectFieldProps extends SelectProps {
  id: string;
  label: string;
  options: { name: string, value: string }[];
}

export default function SelectField({ id, label, options, ...props }: SelectFieldProps) {
  const textColor = useColorModeValue("gray.400", "white");
  const brandStars = useColorModeValue("brand.500", "brand.400");

  return (
    <>
      <FormLabel id={`${id}-label`} htmlFor={id} display="flex" ms="4px" fontSize="sm"
                 fontWeight="500"
                 color={textColor} mb="8px">
        {label}
        {props?.isRequired && <Text color={brandStars}>*</Text>}
      </FormLabel>
      <Select
        id={id}
        variant="main"
        fontSize="sm"
        mb="24px"
        size="lg"
        placeholder="Choose..."
        ms={{ base: "0px", md: "0px" }}
        fontWeight="500"
        {...props}
      >
        {options.map((item) => {
          return (
            <option key={item.value} value={item.value}>{item.name}</option>
          );
        })}
      </Select>
    </>
  );
}
