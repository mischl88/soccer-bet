"use client";
import Link from "next/link";

import { useState } from "react";

import {
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiEyeCloseLine } from "react-icons/ri";
import { useFormik } from "formik";

import Wrapper from "@/views/auth/Wrapper";

import ClientOnly from "@/components/clientOnly";
import InputField from "@/components/form/Input";
import CustomButton from "@/components/CustomButton";

import { ROUTES } from "@/config/routes";

export default function SignInForm() {
  const textColor = useColorModeValue("navy.700", "white");
  const textColorDetails = useColorModeValue("navy.700", "secondaryGray.600");
  const textColorBrand = useColorModeValue("brand.500", "white");
  const [show, setShow] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const handleClick = () => {
    setShow((prevState) => !prevState);
  };

  return (
    <Wrapper
      header="Sign In"
      subHeader="Enter your email and password to sign in!">
      <form onSubmit={formik.handleSubmit}>
        <FormControl>
          <ClientOnly>
            <InputField id="email" label="Email" autoComplete="email" variant="auth" type="email"
                        mb="24px"
                        placeholder="mail@example.com"
                        onChange={formik.handleChange}
                        value={formik.values.email} />

            <InputField id="password" label="Password" autoComplete="current-password"
                        variant="auth"
                        type={show ? "text" : "password"} mb="24px"
                        placeholder="Min. 8 characters"
                        onIconClick={handleClick}
                        icon={show ? RiEyeCloseLine : MdOutlineRemoveRedEye}
                        onChange={formik.handleChange}
                        value={formik.values.password} />

            <Flex justifyContent="space-between" align="center" mb="24px">
              <FormControl display="flex" alignItems="center">
                <Checkbox id="rememberMe" colorScheme="brandScheme" me="10px"
                          onChange={formik.handleChange}
                          value={String(formik.values.rememberMe)} />
                <FormLabel
                  id="remember-me-field"
                  htmlFor="rememberMe"
                  mb="0"
                  fontWeight="normal"
                  color={textColor}
                  fontSize="sm">
                  Keep me logged in
                </FormLabel>
              </FormControl>
              <Link href={ROUTES.FORGOT_PASSWORD}>
                <Text color={textColorBrand} fontSize="sm" w="124px" fontWeight="500">
                  Forgot password?
                </Text>
              </Link>
            </Flex>
            <CustomButton label="Sign In" w="100%" />
          </ClientOnly>
        </FormControl>
      </form>
      <Flex flexDirection="column" justifyContent="center" alignItems="start" maxW="100%" mt="0px">
        <Text color={textColorDetails} fontWeight="400" fontSize="14px">
          Not registered yet?
          <Link href={ROUTES.SIGN_UP}>
            <Text color={textColorBrand} as="span" ms="5px" fontWeight="500">
              Create an Account
            </Text>
          </Link>
        </Text>
      </Flex>
    </Wrapper>
  );
}
