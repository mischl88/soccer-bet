import Link from "next/link";

import { PropsWithChildren } from "react";

import { Text, TextProps, useColorModeValue } from "@chakra-ui/react";

interface CustomLinkProps extends TextProps, PropsWithChildren {
  href: string;
  label?: string;
}

export default function CustomLink({ label, href, children, ...rest }: CustomLinkProps) {
  const textColorBrand = useColorModeValue("brand.500", "white");

  return (
    <Link href={href}>
      {children ?? <Text color={textColorBrand} as="span" fontWeight="500" {...rest}>
        {label}
      </Text>}
    </Link>
  );
}
