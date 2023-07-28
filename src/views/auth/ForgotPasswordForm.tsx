"use client";
import Link from "next/link";

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaChevronLeft } from "react-icons/fa";
import { useFormik } from "formik";

import ClientOnly from "@/components/clientOnly";

import { ROUTES } from "@/config/routes";

export default function ForgotPasswordForm(props: { [x: string]: any }) {
  const textColor = useColorModeValue("navy.700", "white");
  const textColorSecondary = "gray.400";
  const brandStars = useColorModeValue("brand.500", "brand.400");

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

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
          Recover account
        </Heading>
        <Text mb="36px" ms="4px" color={textColorSecondary} fontWeight="400" fontSize="md">
          Enter your email and set new password!
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
        <form onSubmit={formik.handleSubmit}>
          <FormControl>
            <ClientOnly>
              <FormLabel id="email" htmlFor="email" display="flex" ms="4px" fontSize="sm" fontWeight="500"
                         color={textColor} mb="8px">
                Email<Text color={brandStars}>*</Text>
              </FormLabel>
              <Input
                id="email"
                variant="auth"
                autoComplete="email"
                fontSize="sm"
                ms={{ base: "0px", md: "0px" }}
                type="email"
                placeholder="mail@simmmple.com"
                mb="24px"
                fontWeight="500"
                size="lg"
                onChange={formik.handleChange}
                value={formik.values.email}
              />

              <Button type="submit" fontSize="sm" variant="brand" fontWeight="500" w="100%" h="50" mb="24px">
                Recover Password
              </Button>
            </ClientOnly>
          </FormControl>
        </form>
        <Flex flexDirection="column" justifyContent="center" alignItems="start" maxW="100%" mt="0px">
          <Link href={ROUTES.SIGN_IN}>
            <Flex
              align="center">
              <Icon as={FaChevronLeft} me="12px" h="13px" w="8px" color="secondaryGray.600" />
              <Text ms="0px" fontSize="sm" color="secondaryGray.600">
                Back to Sign In
              </Text>
            </Flex>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
