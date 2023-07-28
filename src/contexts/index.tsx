import { createContext, Dispatch, SetStateAction, useContext } from "react";

interface SidebarContextType {
  toggleSidebar: boolean;
  setToggleSidebar: Dispatch<SetStateAction<boolean>>;
}

export const SidebarContext = createContext<Partial<SidebarContextType>>({});

export const useSidebarContext = (): Partial<SidebarContextType> => {
  const context = useContext<Partial<SidebarContextType>>(SidebarContext);
  if (context === undefined) {
    throw new Error(
      "useSidebarContext must be used within a SidebarContext.Provider",
    );
  }

  return context;
};
