import { Icon } from "@chakra-ui/react";
import { MdHome, MdLock } from "react-icons/md";

import { IRoute } from "@/types/navigation";

export const ROUTES = {
  LANDING_PAGE: "/",
  SIGN_IN: "/auth/sign-in",
  SIGN_UP: "/auth/sign-up",
  FORGOT_PASSWORD: "/auth/forgot-password",
};

const routes: IRoute[] = [
  {
    name: "Main Dashboard",
    layout: "/",
    path: "",
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
  },
];

export default routes;
