"use client";
import Link from "next/link";

import { useState } from "react";

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiEyeCloseLine } from "react-icons/ri";
import { useFormik } from "formik";

import ClientOnly from "@/components/clientOnly";

import { ROUTES } from "@/config/routes";

export default function SignUpForm(props: { [x: string]: any }) {
  const textColor = useColorModeValue("navy.700", "white");
  const textColorSecondary = "gray.400";
  const textColorDetails = useColorModeValue("navy.700", "secondaryGray.600");
  const textColorBrand = useColorModeValue("brand.500", "white");
  const brandStars = useColorModeValue("brand.500", "brand.400");
  const [show, setShow] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const handleClick = () => {
    setShow((prevState) => !prevState);
  };

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
          Sign Up
        </Heading>
        <Text mb="36px" ms="4px" color={textColorSecondary} fontWeight="400" fontSize="md">
          Enter your email and password to sign up!
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

              <FormLabel id="password-label" htmlFor="password" ms="4px" fontSize="sm" fontWeight="500" color={textColor}
                         display="flex">
                Password<Text color={brandStars}>*</Text>
              </FormLabel>
              <InputGroup size="md">
                <Input
                  id="password"
                  fontSize="sm"
                  placeholder="Min. 8 characters"
                  mb="24px"
                  size="lg"
                  type={show ? "text" : "password"}
                  variant="auth"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
                <InputRightElement display="flex" alignItems="center" mt="4px">
                  <Icon
                    color={textColorSecondary}
                    _hover={{ cursor: "pointer" }}
                    as={show ? RiEyeCloseLine : MdOutlineRemoveRedEye}
                    onClick={handleClick}
                  />
                </InputRightElement>
              </InputGroup>

              <FormLabel id="confirm-password-label" htmlFor="confirm-password" ms="4px" fontSize="sm" fontWeight="500" color={textColor}
                         display="flex">
                Confirm Password<Text color={brandStars}>*</Text>
              </FormLabel>
              <InputGroup size="md">
                <Input
                  id="confirm-password"
                  fontSize="sm"
                  placeholder="Min. 8 characters"
                  mb="24px"
                  size="lg"
                  type={show ? "text" : "password"}
                  variant="auth"
                  onChange={formik.handleChange}
                  value={formik.values.confirmPassword}
                />
                <InputRightElement display="flex" alignItems="center" mt="4px">
                  <Icon
                    color={textColorSecondary}
                    _hover={{ cursor: "pointer" }}
                    as={show ? RiEyeCloseLine : MdOutlineRemoveRedEye}
                    onClick={handleClick}
                  />
                </InputRightElement>
              </InputGroup>

              <Button type="submit" fontSize="sm" variant="brand" fontWeight="500" w="100%" h="50" mb="24px">
                Sign Up
              </Button>
            </ClientOnly>
          </FormControl>
        </form>
        <Flex flexDirection="column" justifyContent="center" alignItems="start" maxW="100%" mt="0px">
          <Text color={textColorDetails} fontWeight="400" fontSize="14px">
            Already have an account?
            <Link href={ROUTES.SIGN_IN}>
              <Text color={textColorBrand} as="span" ms="5px" fontWeight="500">
                Sign In
              </Text>
            </Link>
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
