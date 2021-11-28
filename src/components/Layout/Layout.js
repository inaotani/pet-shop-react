import React, { useContext } from "react";
import useArrowKeyNavigationHook from "react-arrow-key-navigation-hook";

import Header from "./../Header";
import Footer from "./../Footer";
import { store } from "../../store";

const Layout = ({ children }) => {
  const parentRef = useArrowKeyNavigationHook({
    selectors: "a,button,input,span",
  });

  const globalLogin = useContext(store);
  const { login, contrast } = globalLogin;
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
    <div ref={parentRef} className={contrast ? "contrastMode" : ""}>
      <Header menuList={login.admin ? menuAdmin : menuUser} />

      <main role="main" id="target">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
