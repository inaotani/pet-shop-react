import React, { useContext } from "react";
import Header from "./../Header";
import Footer from "./../Footer";
import { store } from "../../store";

const Layout = ({ children }) => {
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
    <>
      <Header menuList={login.admin ? menuAdmin : menuUser} />

      <main id="target">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
