"use client";

import { useState, PropsWithChildren } from "react";

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from "@chakra-ui/react";

import { SidebarContext } from "@/contexts";
import theme from "@/theme/theme";

export default function Providers({ children }: PropsWithChildren) {
  const [toggleSidebar, setToggleSidebar] = useState(false)

  return (
    <CacheProvider>
      <ChakraProvider theme={theme} toastOptions={{ defaultOptions: { position: "bottom-right" } }}>
        <SidebarContext.Provider
          value={{
            toggleSidebar,
            setToggleSidebar,
          }}
        >
          {children}
        </SidebarContext.Provider>
      </ChakraProvider>
    </CacheProvider>
  );
}
