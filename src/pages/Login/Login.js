import React, { useContext, useState, useEffect } from "react";
import "./../../index.css";
import Layout from "./../../components/Layout";
import Input from "./../../components/Input";
import Btn from "./../../components/Btn";
import DivBorder from "../../components/DivBorder";
import { store } from "../../store";
import "./style.css";
import { useHistory } from "react-router-dom";

const Login = () => {
  const globalLogin = useContext(store);
  const { login, setLogin } = globalLogin;
  const [status, setStatus] = useState(0);
  let history = useHistory();

  useEffect(() => {
    if (login) history.push("/minha-conta");
  }, []);

  async function postLogin(user) {
    const url = "https://petshop-backend.vercel.app/api/login";

    const requestOption = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: user,
    };

    const response = await fetch(url, requestOption).then((response) => {
      if (response.status === 200) {
        setLogin(true);
        history.push("/minha-conta");
        setStatus(0);
      } else {
        setStatus(1);
      }
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const json = JSON.stringify({
      email: e.target.email.value,
      password: e.target.password.value,
    });

    postLogin(json);
  }

  return (
    <Layout>
      <div className="container form">
        <DivBorder>
          <h1>Login</h1>
          <form id="login-form" method="POST" onSubmit={handleSubmit}>
            <Input
              type="text"
              placeholder="e-mail"
              id="email"
              name="email"
              label="E-mail"
              required
            />
            <Input
              type="password"
              placeholder="senha"
              id="password"
              name="password"
              label="Senha"
              required
            />
            <p className={status ? "mgs-error" : "mgs-error hidden"}>
              E-mail e/ou senha inválido
            </p>
            <input type="submit" placeholder="senha" value="Entrar" />
            <Btn link="cadastra-se">Cadastrar-se</Btn>
            <a href="/estoque">Admin</a>
          </form>
        </DivBorder>
      </div>
    </Layout>
  );
};

export default Login;
