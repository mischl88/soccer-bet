"use client";
import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { IoFootballOutline } from "react-icons/io5";

import { HSeparator } from "@/components/separator/Separator";

const SidebarBrand = () => {
  const logoColor = useColorModeValue("navy.700", "white");

  return (
    <Flex alignItems="center" flexDirection="column">
      <IoFootballOutline size="3em" />
      <Text fontSize="3xl" color={logoColor}>Soccer Bet</Text>
      <HSeparator mb="20px" />
    </Flex>
  );
};

export default SidebarBrand;
