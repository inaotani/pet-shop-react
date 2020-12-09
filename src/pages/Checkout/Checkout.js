import React, { useEffect, useContext, useState } from "react";
import Layout from "../../components/Layout";
import Btn from "../../components/Btn";
import DivBorder from "../../components/DivBorder";
import { useHistory } from "react-router-dom";
import { store } from "../../store";
import "./style.css";
import Input from "../../components/Input";

const Checkout = () => {
  const globalLogin = useContext(store);
  const { login, totalPrice, state, setState, setTotalPrice } = globalLogin;
  const [user, setUser] = useState([]);
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

      const response = await fetch(
        "https://petshop-backend.vercel.app/api/user",
        requestOption
      );
      const data = await response.json();
      setUser(data);
    }

    getUser();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    const products = state.map((single) => ({
      _id: single._id,
      name: single.name,
      quantity: single.quantity,
      price: single.price,
    }));

    const json = JSON.stringify({
      bill: products,
      creditCard: e.target.creditCart.value,
      totalPrice: totalPrice,
    });

    async function addSell() {
      const url = `https://petshop-backend.vercel.app/api/sell`;

      const requestOption = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${login.auth}`,
        },
        body: json,
      };

      const response = await fetch(url, requestOption).then((response) => {
        if (response.status === 200) {
          setState([]);
          setTotalPrice(0);
          history.push("/minha-conta");
        } else {
          alert("Error ao cadastrar");
        }
      });
    }
    addSell();
  }
  return (
    <Layout>
      <div className="container checkout">
        <DivBorder>
          <h1>Pagamento</h1>
          <div className="person-info">
            <h2>Informações de Pessoais</h2>
            <p>
              {user.name}
              <br />
              {user.phone}
              <br />
              {user.address}
              <br />
            </p>
          </div>

          <div className="order-info">
            <h2>Informações do Pedido</h2>
            <div>
              {state.map((single) => (
                <div key={single.id}>
                  <p>
                    {single.name}
                    <br />
                    {single.quantity}x {single.price}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="payment-info">
            <h2>Informações do Pagamento</h2>
            <p>
              Preço total: <strong>R$ {totalPrice}</strong>
            </p>
            <form onSubmit={handleSubmit}>
              <Input
                type="text"
                required
                label="Cartão de Crédito"
                placeholder="xxxx.xxxx.xxxx.xxxx"
                name="creditCart"
                id="creditCart"
                required
              />
              <input type="submit" value="Finalizar" />
            </form>
          </div>
          <a href="/carrinho">Voltar ao Carrinho</a>
        </DivBorder>
      </div>
    </Layout>
  );
};

export default Checkout;
