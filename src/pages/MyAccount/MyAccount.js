import React, { useContext, useEffect } from "react";
import Layout from "../../components/Layout";
import DivBorder from "../../components/DivBorder";
import "./style.css";
import { useHistory } from "react-router-dom";
import { store } from "../../store";

const MyAccount = () => {
  const globalLogin = useContext(store);
  const { login, setLogin } = globalLogin;
  let history = useHistory();

  useEffect(() => {
    if (!login.status) history.push("/login");
    async function getSell() {
      const requestOption = {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluIiwiaWQiOiI1ZmMyZTkzYTgzNGQ3OTI4YmViMDQ0NzkiLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNjA3MzkzNjg4fQ.7tV5nAXtLlekBX06Jv4s7UdBNW0Nr_0f_ksK0dFi7Jg",
        },
      };

      const response = await fetch(
        "https://petshop-backend.vercel.app/api/sell",
        requestOption
      );
      const data = await response.json();
      console.log(data);
    }

    getSell();
  }, []);

  function handleLogout() {
    setLogin({ status: false, admin: false });
    history.push("/login");
  }
  return (
    <Layout>
      <div className="container my-account">
        <DivBorder>
          <h1>Minha Conta</h1>
          <div className="person-info">
            <h2>Informações de Pessoais</h2>
            <p>
              Joe Doe
              <br />
              joe.doe@gmail.com
              <br />
              Av. São Carlos, 2020 - Centro
              <br />
              01/01/200
              <br />
            </p>
            <div>
              <a href="#">Editar</a>
            </div>
          </div>
          <div className="order-info">
            <h2>Histórico de Pedidos</h2>
            <p>
              <strong>Pedido: 131289</strong>
              <br />
              12/10/2020 <br />
              1x Royal Canin - Adulto - 15kg -{" "}
              <a href="/produto">Comprar Novamente</a>
              <br />
              Cartão Nubank
              <br />
              Num. xxxx.xxxx.xxxx.2020
              <br />
              1x de 235,99
            </p>
            <p>
              <strong>Pedido: 017638</strong>
              <br />
              15/02/2020 <br />
              1x Royal Canin - Adulto - 15kg -{" "}
              <a href="/produto">Comprar Novamente</a>
              <br />
              Cartão Nubank
              <br />
              Num. xxxx.xxxx.xxxx.2020
              <br />
              1x de 235,99
            </p>
          </div>
          <a href="#" onClick={handleLogout}>
            <strong>Sair</strong>
          </a>
        </DivBorder>
      </div>
    </Layout>
  );
};

export default MyAccount;
