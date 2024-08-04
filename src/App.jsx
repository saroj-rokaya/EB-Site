import React from "react";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import { Outlet, useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();
  const isErrorPage = location.pathname === '*';
  return (
    <>
      {!isErrorPage && <Header />}
      <Outlet />
      {!isErrorPage && <Footer />}
    </>
  );
};

export default App;
