import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useStateContext } from "./contexts/ContextProvider";
import { Navbar, Footer, Sidebar } from "./components";
import { Ecommerce, Customers } from "./pages";
import "./App.css";

const App = () => {
  
  const {
    setCurrentColor,
    setCurrentMode,
    currentMode,
    activeMenu,   
  } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem("colorMode");
    const currentThemeMode = localStorage.getItem("themeMode");
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          {activeMenu && (
            <div className="w-1/5 fixed sidebar dark:bg-secondary-dark-bg bg-zinc-700">
              <Sidebar />
            </div>
          )}
          <div className="w-full flex flex-col">
            <div className="flex justify-end">
              <div className={activeMenu ? "w-4/5" : "w-full"}>
                <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
                  <Navbar />
                </div>
                <div className="flex flex-1">
                  <div className={activeMenu ? "w-1/5" : ""} />  
                  <div className="w-full bg-main-bg dark:bg-main-dark-bg min-h-screen">
                    <Routes>
                   
                      <Route path="/" element={<Ecommerce />} />
                      <Route path="/Dashboard" element={<Ecommerce />} />
                 
                      <Route path="/Students" element={<Customers />} />
                    </Routes>
                  </div>
                </div>
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
