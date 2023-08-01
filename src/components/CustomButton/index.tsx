import { Button, ButtonProps } from "@chakra-ui/react";

interface CustomButtonProps extends ButtonProps {
  label: string;
}

export default function CustomButton({ label, ...rest }: CustomButtonProps) {
  return (
    <Button type="submit" fontSize="sm" variant="brand" fontWeight="500" h="50"
            mb="24px" {...rest}>
      {label}
    </Button>
  );
}
