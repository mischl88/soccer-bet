import { PropsWithChildren } from "react";

import { Box, Flex, Heading, Text, useColorModeValue } from "@chakra-ui/react";

interface WrapperProps extends PropsWithChildren {
  header: string;
  subHeader: string;
}

export default function Wrapper({ header, subHeader, children }: WrapperProps) {
  const textColor = useColorModeValue("navy.700", "white");
  const textColorSecondary = "gray.400";

  return (
    <Flex
      maxW={{ base: "100%", md: "max-content" }}
      w="100%"
      mx={{ base: "auto", lg: "0px" }}
      me="auto"
      h="100%"
      alignItems="start"
      justifyContent="center"
      mb={{ base: "30px", md: "60px" }}
      px={{ base: "25px", md: "0px" }}
      mt={{ base: "40px", md: "14vh" }}
      flexDirection="column">
      <Box me="auto">
        <Heading color={textColor} fontSize="36px" mb="10px">
          {header}
        </Heading>
        <Text mb="36px" ms="4px" color={textColorSecondary} fontWeight="400" fontSize="md">
          {subHeader}
        </Text>
      </Box>
      <Flex
        zIndex="2"
        direction="column"
        w={{ base: "100%", md: "420px" }}
        maxW="100%"
        background="transparent"
        borderRadius="15px"
        mx={{ base: "auto", lg: "unset" }}
        me="auto"
        mb={{ base: "20px", md: "auto" }}>
        {children}
      </Flex>
    </Flex>
  );
}
