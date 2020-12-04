import React from "react";
import Style from "./style.css";
import Header from "./../Header";
import Footer from "./../Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header
        menuList={[
          { link: "/", text: "Página Inicial" },
          { link: "/racoes", text: "Rações" },
          { link: "/minha-conta", text: "Minha Conta" },
        ]}
      />

      <main id="target">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
