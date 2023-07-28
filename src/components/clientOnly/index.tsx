"use client";
import { FC, PropsWithChildren, ReactElement, useEffect, useState } from "react";

import { CircularProgress } from "@chakra-ui/react";

export type ClientOnlyProps = {
  placeholder?: ReactElement | null;
} & PropsWithChildren;

const ClientOnly: FC<ClientOnlyProps> = ({ children, placeholder = null }) => {
  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return isMounted ? children : placeholder ||
    <CircularProgress display="flex" justifyContent="center" isIndeterminate />;
};

export default ClientOnly;
