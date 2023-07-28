"use client";

import { Flex, Text, useColorModeValue } from '@chakra-ui/react';

export default function Footer(props: { [x: string]: any }) {
  const textColor = useColorModeValue('gray.400', 'white');

  return (
    <Flex
      zIndex="3"
      flexDirection={{
        base: "column",
        lg: "row"
      }}
      alignItems={{
        base: "center",
        xl: "start"
      }}
      justifyContent="space-between"
      px={{ base: "30px", md: "0px" }}
      pb="30px"
      {...props}>
      <Text
        color={textColor}
        textAlign={{
          base: "center",
          xl: "start"
        }}
        mb={{ base: "20px", lg: "0px" }}>
        {" "}
        &copy; {new Date().getFullYear()}
        <Text as="span" fontWeight="500" ms="4px">
          Mikee. All Rights Reserved.
        </Text>
      </Text>
    </Flex>
  );
}
