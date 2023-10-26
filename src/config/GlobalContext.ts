import { DefaultTheme } from "styled-components/dist/types";
import { createContext, useContext } from "react";
import { dark } from "./themes/themes";

interface GlobalContextType {
  theme: DefaultTheme;
  toggleTheme: () => void;
}

export const GlobalContext = createContext<GlobalContextType>({
  theme: dark,
  toggleTheme: () => {},
});

export const useGlobalConext = () => useContext(GlobalContext);
