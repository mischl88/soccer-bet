import { IconType } from "react-icons";

import {
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

interface InputFieldProps extends InputProps {
  id: string;
  label: string;
  onIconClick?: () => void;
  icon?: IconType;
}

export default function InputField({ id, label, onIconClick, icon, ...props }: InputFieldProps) {
  const textColor = useColorModeValue("gray.400", "white");
  const brandStars = useColorModeValue("brand.500", "brand.400");
  const textColorSecondary = "gray.400";

  const labelField = (
    <FormLabel id={`${id}-label`} htmlFor={id} display="flex" ms="4px" fontSize="sm"
               fontWeight="500"
               color={textColor} mb="8px">
      {label}
      <Text color={brandStars}>*</Text>
    </FormLabel>
  );
  const inputField = (
    <>
      <Input
        id={id}
        variant="auth"
        fontSize="sm"
        ms={{ base: "0px", md: "0px" }}
        fontWeight="500"
        size="lg"
        {...props}
      />
    </>
  );

  if (!icon) {
    return <>{labelField}{inputField}</>;
  }

  return (
    <>
      {labelField}
      <InputGroup size="md">
        {inputField}
        <InputRightElement display="flex" alignItems="center" mt="4px">
          <Icon
            color={textColorSecondary}
            _hover={{ cursor: "pointer" }}
            onClick={onIconClick}
            as={icon}
          />
        </InputRightElement>
      </InputGroup>
    </>
  );
}
