import React, { useContext, useEffect, useState } from "react";
import Layout from "../../components/Layout";
import DivBorder from "../../components/DivBorder";
import "./style.css";
import { Link, useHistory } from "react-router-dom";
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
          </div>
          <div className="order-info">
            <p>
              <h2>
                {historic.length > 0
                  ? "Histórico de Pedidos"
                  : "Nenhum pedido realizado"}
              </h2>
            </p>
            {historic.map((single) => (
              <div>
                <p>
                  <strong>ID: {single._id}</strong>
                  <br />
                  Data: {single.date}
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
                        <Link to={`/p/${b._id}`}>{b.name}</Link>
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
          <a href="#" onClick={handleLogout}>
            <strong>Sair</strong>
          </a>
        </DivBorder>
      </div>
    </Layout>
  );
};

export default MyAccount;
