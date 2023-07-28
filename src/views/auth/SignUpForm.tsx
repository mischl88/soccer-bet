"use client";
import Link from "next/link";

import { useState } from "react";

import { Button, Flex, FormControl, Text, useColorModeValue } from "@chakra-ui/react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiEyeCloseLine } from "react-icons/ri";
import { useFormik } from "formik";

import Wrapper from "@/views/auth/Wrapper";

import ClientOnly from "@/components/clientOnly";
import InputField from "@/components/form/Input";

import { ROUTES } from "@/config/routes";

export default function SignUpForm(props: { [x: string]: any }) {
  const textColorDetails = useColorModeValue("navy.700", "secondaryGray.600");
  const textColorBrand = useColorModeValue("brand.500", "white");
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
    <Wrapper
      header="Sign Up"
      subHeader="Enter your email and password to sign up!">
      <form onSubmit={formik.handleSubmit}>
        <FormControl>
          <ClientOnly>
            <InputField id="email" label="Email" autoComplete="email" variant="auth" type="email"
                        mb="24px"
                        placeholder="mail@example.com"
                        onChange={formik.handleChange}
                        value={formik.values.email} />

            <InputField id="password" label="Password" variant="auth"
                        type={show ? "text" : "password"} mb="24px"
                        placeholder="Min. 8 characters"
                        onIconClick={handleClick}
                        icon={show ? RiEyeCloseLine : MdOutlineRemoveRedEye}
                        onChange={formik.handleChange}
                        value={formik.values.password} />

            <InputField id="confirmPassword" label="Confirm Password" variant="auth"
                        type={show ? "text" : "password"} mb="24px"
                        placeholder="Min. 8 characters"
                        onIconClick={handleClick}
                        icon={show ? RiEyeCloseLine : MdOutlineRemoveRedEye}
                        onChange={formik.handleChange}
                        value={formik.values.confirmPassword} />

            <Button type="submit" fontSize="sm" variant="brand" fontWeight="500" w="100%" h="50"
                    mb="24px">
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
    </Wrapper>
  );
}
