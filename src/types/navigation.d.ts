export interface IRoute {
  name: string;
  layout?: string;
  icon: string;
  path: string;
  show: boolean;
  children?: (Omit<IRoute, 'icon'> & { icon?: string | undefined })[];
}
