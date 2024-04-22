import { createContext, useContext, useState } from "react";

type SidebarProviderProps = {
  children: React.ReactNode;
};

type SidebarProviderState = {
  isSmSidebar: boolean;
  toggleSidebar: () => void;
};

const initialState: SidebarProviderState = {
  isSmSidebar: false,
  toggleSidebar: () => {},
};

const SidebarProviderContext =
  createContext<SidebarProviderState>(initialState);

export function SidebarProvider({ children, ...props }: SidebarProviderProps) {
  const [isSmSidebar, setIsSmSidebar] = useState<boolean>(false);

  const value = {
    isSmSidebar,
    toggleSidebar: () => {
      setIsSmSidebar(!isSmSidebar);
    },
  };

  return (
    <SidebarProviderContext.Provider {...props} value={value}>
      {children}
    </SidebarProviderContext.Provider>
  );
}

export const useSidebar = () => useContext(SidebarProviderContext);
