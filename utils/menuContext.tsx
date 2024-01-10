"use client";

import { ReactNode, createContext, useState } from "react";

type Theme = "light" | "dark";

type MenuContextType = {
  projectLinksMenu: boolean;
  setProjectLinksMenu: React.Dispatch<React.SetStateAction<boolean>>;
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
};

export const MenuContext = createContext<MenuContextType | null>(null);

export default function HeaderContextProvider({ children }: any) {
  const [projectLinksMenu, setProjectLinksMenu] = useState(true);
  const [theme, setTheme] = useState<Theme>("dark");

  return (
    <MenuContext.Provider
      value={{
        projectLinksMenu: projectLinksMenu,
        setProjectLinksMenu: setProjectLinksMenu,
        theme: theme,
        setTheme: setTheme,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}
