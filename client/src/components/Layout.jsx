import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      {/* Se renderizan los componentes hijos */}
      <Outlet />
      {/* lorem x3000 para probar la navegacion */}

      <Footer />
    </>
  );
};

export default Layout;
