import { Icon } from "@chakra-ui/react";
import { MdHome } from "react-icons/md";

import { IRoute } from "@/types/navigation";

export const ROUTES = {
  LANDING_PAGE: "/",
  SIGN_IN: "/auth/sign-in",
  SIGN_UP: "/auth/sign-up",
  FORGOT_PASSWORD: "/auth/forgot-password",
};

const routes: IRoute[] = [
  {
    name: "Dashboard",
    layout: "/",
    path: "",
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
  },
  {
    name: "My Scores",
    layout: "/soccer",
    path: "/my-scores",
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
  },
  {
    name: "Matches",
    layout: "/soccer",
    path: "/matches",
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
  },
  {
    name: "Ranking",
    layout: "/soccer",
    path: "/ranking",
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
  },
  {
    name: "Users",
    layout: "/users",
    path: "",
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
  },
];

export default routes;
