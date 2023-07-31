"use client";
import { useRouter } from "next/navigation";

import { PropsWithChildren } from "react";

import { Box, Button, Flex, FormControl } from "@chakra-ui/react";

export default function Wrapper({ children }: PropsWithChildren) {
  const router = useRouter();

  return (
    <Box maxW={{ base: "600px" }} w={{ base: "100%" }} me="auto"
         mx={{ base: "auto", lg: "unset" }}
         mb={{ base: "20px", md: "auto" }}>
      <FormControl>
        {children}
        <Flex justifyContent="flex-end">
          <Button onClick={() => router.back()} fontSize="sm" variant="darkBrand" fontWeight="500"
                  w="25%" h="45px" mr="10px">
            Back
          </Button>
          <Button type="submit" fontSize="sm" variant="brand" fontWeight="500" w="25%" h="45px">
            Save
          </Button>
        </Flex>
      </FormControl>
    </Box>
  );
}
