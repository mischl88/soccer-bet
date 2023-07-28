"use client";
import { Box, useColorModeValue } from "@chakra-ui/react";

import Content from "./components/Content";

// import { renderThumb, renderTrack, renderView } from "@/components/scrollbar/Scrollbar";
import { SidebarResponsiveProps } from "@/components/sidebar/SidebarResponsive";

interface SidebarProps extends SidebarResponsiveProps {
}

export default function Sidebar({ routes }: SidebarProps) {
  const variantChange = "0.2s linear";
  const shadow = useColorModeValue(
    "14px 17px 40px 4px rgba(112, 144, 176, 0.08)",
    "unset",
  );
  const sidebarBg = useColorModeValue("white", "navy.800");
  const sidebarMargins = "0px";

  return (
    <Box display={{ sm: "none", xl: "block" }} position="fixed" minH="100%">
      <Box
        bg={sidebarBg}
        transition={variantChange}
        w="300px"
        h="100vh"
        m={sidebarMargins}
        minH="100%"
        overflowX="hidden"
        boxShadow={shadow}
      >
        {/*<Scrollbars*/}
        {/*  autoHide*/}
        {/*  renderTrackVertical={renderTrack}*/}
        {/*  renderThumbVertical={renderThumb}*/}
        {/*  renderView={renderView}*/}
        {/*>*/}
        <Content routes={routes} />
        {/*</Scrollbars>*/}
      </Box>
    </Box>
  );
}
