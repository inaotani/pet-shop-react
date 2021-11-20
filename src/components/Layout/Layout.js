import React, { useContext } from "react";
import useArrowKeyNavigationHook from "react-arrow-key-navigation-hook";

import Header from "./../Header";
import Footer from "./../Footer";
import { store } from "../../store";

const Layout = ({ children }) => {
  const parentRef = useArrowKeyNavigationHook({ selectors: "a,button,input" });

  const globalLogin = useContext(store);
  const { login } = globalLogin;
  const menuUser = [
    { link: "/", text: "Página Inicial" },
    { link: "/racoes", text: "Rações" },
    { link: "/minha-conta", text: "Minha Conta" },
  ];

  const menuAdmin = [
    { link: "/", text: "Página Inicial" },
    { link: "/racoes", text: "Rações" },
    { link: "/minha-conta", text: "Minha Conta" },
    { link: "/estoque", text: "Estoque" },
  ];
  return (
    <div ref={parentRef}>
      <Header menuList={login.admin ? menuAdmin : menuUser} />

      <main id="target">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
