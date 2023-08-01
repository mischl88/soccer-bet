"use client";
import { useRouter } from "next/navigation";

import { PropsWithChildren } from "react";

import { Box, Flex, FormControl } from "@chakra-ui/react";

import CustomButton from "@/components/CustomButton";

export default function Wrapper({ children }: PropsWithChildren) {
  const router = useRouter();

  return (
    <Box maxW={{ base: "600px" }} w={{ base: "100%" }} me="auto"
         mx={{ base: "auto", lg: "unset" }}
         mb={{ base: "20px", md: "auto" }}>
      <FormControl>
        {children}
        <Flex justifyContent="flex-end">
          <CustomButton type="button" onClick={() => router.back()} label="Back" variant="darkBrand"
                        w="25%"
                        h="45px" mr="10px" />
          <CustomButton label="Save" w="25%"
                        h="45px" />
        </Flex>
      </FormControl>
    </Box>
  );
}
