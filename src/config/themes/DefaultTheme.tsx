import { useCallback, useState } from "react";
import { dark, light } from "./themes";
import { GlobalContext } from "../GlobalContext";
import { ThemeProvider } from "styled-components";

interface DefaultThemeProps {
  children: React.ReactNode;
}

function DefaultThemeApp({ children }: DefaultThemeProps) {
  const [theme, setTheme] = useState(light);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev.title === "light" ? dark : light));
  }, []);

  return (
    <GlobalContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </GlobalContext.Provider>
  );
}

export default DefaultThemeApp;
