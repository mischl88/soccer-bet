"use client";
import { usePathname } from "next/navigation";

import { PropsWithChildren } from "react";

import { Box, useColorModeValue } from "@chakra-ui/react";


import Navbar from "@/components/navbar/NavbarAdmin";
import Footer from "@/components/footer/FooterAdmin";
import Sidebar from "@/components/sidebar/Sidebar";

import routes from "@/config/routes";

import { getActiveNavbarText, getActiveRoute } from "@/utils/navigation";

export default function DefaultLayout({ children }: PropsWithChildren) {
  const pathname = usePathname();
  const background = useColorModeValue("background.light", "background.dark");

  return (
    <Box>
      <Sidebar routes={routes} />
      <Box
        float="right"
        minHeight="100vh"
        height="100%"
        // overflow="auto"
        position="relative"
        maxHeight="100%"
        w={{ base: "100%", xl: "calc( 100% - 290px )" }}
        maxWidth={{ base: "100%", xl: "calc( 100% - 290px )" }}
        transition="all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
        transitionDuration=".2s, .2s, .35s"
        transitionProperty="top, bottom, width"
        transitionTimingFunction="linear, linear, ease"
        bg={background}
      >
        <Navbar
          brandText={getActiveRoute(pathname)}
          message={getActiveNavbarText(pathname)}
        />
        <Box
          mx="auto"
          p={{ base: "20px", md: "30px" }}
          pe="20px"
          minH="calc( 100vh - 135px )"
          pt="50px"
        >
          {children}
        </Box>
        <Box>
          <Footer />
        </Box>
      </Box>
    </Box>
  );
}
