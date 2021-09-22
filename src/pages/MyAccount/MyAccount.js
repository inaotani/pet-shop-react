import React, { useContext, useEffect, useState } from "react";
import Layout from "../../components/Layout";
import DivBorder from "../../components/DivBorder";
import "./style.css";
import { Link, useHistory } from "react-router-dom";
import { store } from "../../store";
import Moment from "moment";

const MyAccount = () => {
  const globalLogin = useContext(store);
  const { login, setLogin } = globalLogin;
  const [historic, setHistoric] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  let history = useHistory();

  useEffect(() => {
    if (!login.status) history.push("/login");

    async function getUser() {
      const response = await fetch("http://localhost:3001/user/1");
      const data = await response.json();
      setUserInfo(data);
    }

    async function getSell() {
      const response = await fetch("http://localhost:3001/sells");
      const data = await response.json();
      setHistoric(data);
    }

    getUser();
    getSell();
  }, [history, login.status]);

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
          </div>
          <div className="order-info">
            <h2>
              {historic.length > 0
                ? "Histórico de Pedidos"
                : "Nenhum pedido realizado"}
            </h2>

            {historic.length > 0 &&
              historic.map((single) => (
                <div>
                  <p>
                    <strong>ID: {single.id}</strong>
                    <br />
                    Data: {Moment(single.date).format("DD/MM/YYYY")}
                    <br />
                    Preço total: {single.totalPrice}
                    <br />
                    Cartão: {single.creditCard}
                  </p>
                  <div>
                    <strong>Produtos:</strong>
                    <div>
                      {single.bill.map((b) => (
                        <div>
                          <Link to={`/p/${b.id}`}>{b.name}</Link>
                          <br />
                          {b.quantity}x{b.price}
                        </div>
                      ))}
                    </div>
                  </div>
                  <hr />
                </div>
              ))}
          </div>
          <div className="logout-link" onClick={handleLogout}>
            <strong>Sair</strong>
          </div>
        </DivBorder>
      </div>
    </Layout>
  );
};

export default MyAccount;
