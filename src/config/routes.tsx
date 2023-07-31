import { Icon } from "@chakra-ui/react";
import { MdHome } from "react-icons/md";

import { IRoute } from "@/types/navigation";

export const ROUTES = {
  LANDING_PAGE: "/",
  SIGN_IN: "/auth/sign-in",
  SIGN_UP: "/auth/sign-up",
  FORGOT_PASSWORD: "/auth/forgot-password",
  EDIT_SCORE: "/soccer/my-scores",
  EDIT_MATCH: "/soccer/matches",
};

const routes: IRoute[] = [
  {
    name: "Dashboard",
    layout: "/",
    path: "",
    show: true,
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
  },
  {
    name: "My Scores",
    layout: "/soccer",
    path: "/my-scores",
    show: true,
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    children: [
      {
        name: "Edit Score",
        layout: "/soccer/:id",
        path: "/my-scores",
        show: false,
      },
    ]
  },
  {
    name: "Matches",
    layout: "/soccer",
    path: "/matches",
    show: true,
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
  },
  {
    name: "Ranking",
    layout: "/soccer",
    path: "/ranking",
    show: true,
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
  },
  {
    name: "Users",
    layout: "/users",
    path: "",
    show: true,
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
  },
];

export default routes;
