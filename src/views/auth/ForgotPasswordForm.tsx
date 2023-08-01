"use client";
import Link from "next/link";

import { Flex, FormControl, Icon, Text } from "@chakra-ui/react";
import { FaChevronLeft } from "react-icons/fa";
import { useFormik } from "formik";

import Wrapper from "@/views/auth/Wrapper";

import ClientOnly from "@/components/clientOnly";
import InputField from "@/components/form/Input";
import CustomButton from "@/components/CustomButton";

import { ROUTES } from "@/config/routes";

export default function ForgotPasswordForm() {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

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

            <CustomButton label="Recover Password" w="100%" />
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
    </Wrapper>
  );
}
