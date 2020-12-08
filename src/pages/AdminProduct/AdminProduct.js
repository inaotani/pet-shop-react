import React, { useState, useEffect, useContext } from "react";
import "./../../index.css";
import Layout from "../../components/Layout";
import InlineCard from "../../components/InlineCard";
import "./style.css";
import Btn from "../../components/Btn";
import { useHistory } from "react-router-dom";
import { store } from "../../store";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const globalLogin = useContext(store);
  const { login, setLogin } = globalLogin;
  let history = useHistory();

  useEffect(() => {
    if (!login.admin) history.push("/login");
  }, []);

  useEffect(() => {
    async function getProducts() {
      const response = await fetch(
        "https://petshop-backend.vercel.app/api/supply"
      );
      const data = await response.json();
      setProducts(data);
    }

    getProducts();
  }, []);

  function handleExclude(id) {
    let conf = window.confirm("Ter certeza que deseja excluir o produto?");
    if (conf) {
      excludeProduct(id);
    }
  }

  function handleLogout() {
    setLogin({ status: false, admin: false });
    history.push("/login");
  }

  async function excludeProduct(id) {
    const url = `https://petshop-backend.vercel.app/api/supply/`;
    const access_token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluIiwiaWQiOiI1ZmMyZTkzYTgzNGQ3OTI4YmViMDQ0NzkiLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNjA3MjAyNDE4fQ.Lo0JhQ7EmDiU8fNTi9gvytd3mHrIQ17hpTLjtcIgfWs";

    const json = JSON.stringify({
      id: id,
    });

    const requestOption = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: access_token,
      },
      body: json,
    };

    const response = await fetch(url, requestOption).then((response) => {
      if (response.status === 200) {
        console.log("ok");
      } else {
        console.log("error");
      }
    });
  }

  return (
    <Layout>
      <div className="container admin-product">
        <h1>Estoque</h1>
        {products.map((single, index) => (
          <InlineCard key={single.name + index} card={single} type="admin">
            <div
              className="btn-exclude"
              onClick={() => handleExclude(single._id)}
            >
              <a href="#">Excluir</a>
            </div>
          </InlineCard>
        ))}
        <Btn link="/add-produto">Adicionar Produto</Btn>
        <a href="#" onClick={handleLogout}>
          <strong>Sair</strong>
        </a>
      </div>
    </Layout>
  );
};

export default Cart;
