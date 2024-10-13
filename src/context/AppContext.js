import { createContext, useContext } from "react";

export const AppContext = createContext({
  themeMode: "dark",
  darkTheme: () => {},
  lightTheme: () => {},
});

export const AppContextProvider = AppContext.Provider;

export const useCustomContext = () => {
  return useContext(AppContext);
};
