import { createContext, Dispatch, SetStateAction, useContext } from 'react';

interface SidebarContextType {
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

export const SidebarContext = createContext<SidebarContextType>({
  sidebarOpen: false,
  setSidebarOpen: () => {},
});

export const useSidebarContext = (): SidebarContextType => {
  const context = useContext<SidebarContextType>(SidebarContext);
  if (context === undefined) {
    throw new Error(
      'useSidebarContext must be used within a SidebarContext.Provider',
    );
  }

  return context;
};
