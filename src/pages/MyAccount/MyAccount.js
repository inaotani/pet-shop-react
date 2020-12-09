import React, { useContext, useEffect, useState } from "react";
import Layout from "../../components/Layout";
import DivBorder from "../../components/DivBorder";
import "./style.css";
import { useHistory } from "react-router-dom";
import { store } from "../../store";

const MyAccount = () => {
  const globalLogin = useContext(store);
  const { login, setLogin } = globalLogin;
  const [historic, setHistoric] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  let history = useHistory();

  useEffect(() => {
    if (!login.status) history.push("/login");

    async function getUser() {
      const requestOption = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${login.auth}`,
        },
      };

      try {
        const [data1, data2] = await Promise.all([
          fetch(
            "https://petshop-backend.vercel.app/api/user",
            requestOption
          ).then((value) => value.json()),
          fetch(
            "https://petshop-backend.vercel.app/api/sell",
            requestOption
          ).then((value) => value.json()),
        ]).then((value) => {
          setUserInfo(value[0]);
          setHistoric(value[1]);
          console.log(userInfo);
          console.log(historic);
        });
      } catch (err) {
        console.log(err);
      }
    }
    getUser();
  }, []);

  useEffect(() => {}, []);

  function handleLogout() {
    setLogin({ status: false, admin: false, auth: "" });
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
              {userInfo.name}
              <br />
              {userInfo.email}
              <br />
              {userInfo.address}
              <br />
              {userInfo.phone}
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
