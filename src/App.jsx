import React from "react";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import { Outlet, useLocation } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
