"use client";
import { useRef } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";

import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Icon,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { IoMenuOutline } from "react-icons/io5";

import Content from "./components/Content";

import { renderThumb, renderTrack, renderView } from "@/components/scrollbar/Scrollbar";

// Assets
import { IRoute } from "@/types/navigation";

export interface SidebarResponsiveProps {
  routes: IRoute[];
}

export default function SidebarResponsive({ routes }: SidebarResponsiveProps) {
  const sidebarBackgroundColor = useColorModeValue("white", "navy.800");
  const menuColor = useColorModeValue("gray.400", "white");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  return (
    <Flex display={{ sm: "flex", xl: "none" }} alignItems="center">
      <Flex ref={btnRef} w="max-content" h="max-content" onClick={onOpen}>
        <Icon
          as={IoMenuOutline}
          color={menuColor}
          my="auto"
          w="20px"
          h="20px"
          me="10px"
          _hover={{ cursor: "pointer" }}
        />
      </Flex>
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement="left"
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent w="285px" maxW="285px" bg={sidebarBackgroundColor}>
          <DrawerCloseButton
            zIndex="3"
            onClick={onClose}
            _focus={{ boxShadow: "none" }}
            _hover={{ boxShadow: "none" }}
          />
          <DrawerBody maxW="285px" px="0rem" pb="0">
            <Scrollbars
              autoHide
              renderTrackVertical={renderTrack}
              renderThumbVertical={renderThumb}
              renderView={renderView}
            >
              <Content routes={routes} />
            </Scrollbars>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}
