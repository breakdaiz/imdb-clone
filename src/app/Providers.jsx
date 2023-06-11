"use client";
import { createContext } from "react";

const Context = createContext();

import { ThemeProvider } from "next-themes";

const Providers = ({ children }) => {
  return (
    <ThemeProvider enableSystem={true} attribute='class'>
      {children}
    </ThemeProvider>
  );
};

export default Providers;
