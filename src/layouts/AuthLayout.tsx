"use client";
import { PropsWithChildren } from "react";

import { Box, Flex, useColorModeValue } from "@chakra-ui/react";

import Footer from "@/components/footer/FooterAuth";

interface AuthLayoutProps extends PropsWithChildren {
  illustrationBackground?: string;
}

export default function AuthLayout({ children, illustrationBackground }: AuthLayoutProps) {
  const authBg = useColorModeValue("white", "navy.900");

  return (
    <Flex minW="100vh" w="100%" bg={authBg} position="relative" h="max-content">
      <Flex
        h={{
          sm: "initial",
          md: "unset",
          lg: "100vh",
          xl: "100vh",
        }}
        w={{ base: "100vw", md: "100%" }}
        maxW={{ md: "66%", lg: "1313px" }}
        mx={{ md: "auto" }}
        pt={{ sm: "50px", md: "0px" }}
        px={{ lg: "30px", xl: "0px" }}
        ps={{ xl: "70px" }}
        justifyContent="start"
        direction="column">
        {children}
        {illustrationBackground && (<Box
          display={{ base: "none", md: "block" }}
          h="100%"
          minH="100vh"
          w={{ lg: "50vw", "2xl": "44vw" }}
          position="absolute"
          right="0px">
          <Flex
            style={{ backgroundImage: `url(${illustrationBackground})` }}
            justify="center"
            align="end"
            w="100%"
            h="100%"
            bgSize="cover"
            bgPosition="50%"
            position="absolute"
            borderBottomLeftRadius={{ lg: "120px", xl: "200px" }}
          />
        </Box>)}
        <Footer mb={{ xl: "3vh" }} />
      </Flex>
    </Flex>
  );
}
