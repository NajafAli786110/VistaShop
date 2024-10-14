import { CustomRoute } from "./config/Routes";
import "./App.css";
import { useEffect, useState } from "react";
import { FetchProducts } from "./api/api";
import { AppContextProvider } from "./context/AppContext";
import { TailSpin } from "react-loader-spinner";
import { useLocation } from "react-router-dom";

function App() {
  const [products, setProducts] = useState([]);
  const [themeMode, setThemeMode] = useState("light");
  const [loading, setLoading] = useState(true);

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
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <AppContextProvider
      value={{ products, setProducts, themeMode, lightTheme, darkTheme }}
    >
      {loading ? (
        <div className="flex h-screen w-full items-center justify-center">
          <TailSpin
            visible={true}
            height="80"
            width="80"
            color="#2663eb"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      ) : (
        <CustomRoute />
      )}
    </AppContextProvider>
  );
}

export default App;
