import { CustomRoute } from "./config/Routes";
import "./App.css";
import { useEffect, useState } from "react";
import { FetchProducts } from "./api/api";
import { AppContextProvider } from "./context/AppContext";

function App() {
  const [products, setProducts] = useState([]);
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    const getProducts = async () => {
      try {
        const getResponse = await FetchProducts();
        setProducts(getResponse);
      } catch (error) {
        console.log(error.message);
      }
    };
    getProducts();
  }, []);

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <AppContextProvider
      value={{ products, setProducts, themeMode, lightTheme, darkTheme }}
    >
      <CustomRoute />
    </AppContextProvider>
  );
}

export default App;
