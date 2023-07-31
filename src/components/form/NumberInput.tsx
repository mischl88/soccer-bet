import {
  FormLabel,
  NumberInput,
  NumberInputProps,
  NumberInputField as ChakraNumberInputField,
  NumberInputFieldProps as ChakraNumberInputFieldProps,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

interface NumberInputFieldProps extends ChakraNumberInputFieldProps {
  id: string;
  label: string;
  inputProps?: NumberInputProps;
}

export default function NumberInputField({ id, label, inputProps, ...props }: NumberInputFieldProps) {
  const textColor = useColorModeValue("gray.400", "white");
  const brandStars = useColorModeValue("brand.500", "brand.400");

  return (
    <NumberInput size="lg" variant="auth" min={0} max={30} mb="24px" {...inputProps}>
      <FormLabel id={`${id}-label`} htmlFor={id} display="flex" ms="4px" fontSize="sm"
                 fontWeight="500"
                 color={textColor} mb="8px">
        {label}
        {inputProps?.isRequired && <Text color={brandStars}>*</Text>}
      </FormLabel>
      <ChakraNumberInputField
        id={id}
        fontSize="sm"
        ms={{ base: "0px", md: "0px" }}
        fontWeight="500"
        {...props}
      />
    </NumberInput>
  );
}
