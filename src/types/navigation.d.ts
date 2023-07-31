import { ReactComponentElement } from "react";

export interface IRoute {
  name: string;
  layout: string;
  icon: ReactComponentElement | string;
  path: string;
  show: boolean;
  children?: (Omit<IRoute, "icon"> & { icon?: ReactComponentElement | string | undefined })[];
}
