import { PropsWithChildren } from 'react';

interface MenuGroupProps extends PropsWithChildren {
  title?: string;
}

const MenuGroup = ({ title = 'menu', children }: MenuGroupProps) => {
  return (
    <div>
      <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2 uppercase">
        {title}
      </h3>

      <ul className="mb-6 flex flex-col gap-1.5">{children}</ul>
    </div>
  );
};

export default MenuGroup;
