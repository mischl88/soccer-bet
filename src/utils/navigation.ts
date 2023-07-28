import { IRoute } from "@/types/navigation";

import routes from "@/config/routes";


export const findCurrentRoute = (pathname: string): IRoute | undefined => {
  return routes.find(
    (route) =>
      pathname === route.layout + route.path
  );
};

export const getActiveRoute = (pathname: string): string => {
  const route = findCurrentRoute(pathname);
  return route?.name || "Default Brand Text";
};

export const getActiveNavbarText = (pathname: string): string | boolean => {
  return getActiveRoute(pathname) || false;
};
