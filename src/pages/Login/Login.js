import React, { useContext, useState, useEffect } from "react";
import Layout from "./../../components/Layout";
import Input from "./../../components/Input";
import DivBorder from "../../components/DivBorder";
import { store } from "../../store";
import "./style.css";
import { useHistory } from "react-router-dom";

const Login = () => {
  const globalLogin = useContext(store);
  const { state, login, setLogin } = globalLogin;
  const [status, setStatus] = useState(0);
  let history = useHistory();

  useEffect(() => {
    if (login.status) {
      history.push("/minha-conta");
    }
  }, [history, login, state]);

  async function postLogin(user) {
    const response = {
      status: 200,
    };

    if (response.status === 200) {
      setStatus(0);
    } else {
      setStatus(1);
    }

    setLogin({ status: true, admin: false });
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
          <h1 lang="en-US">Login</h1>
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
          </form>
        </DivBorder>
      </div>
    </Layout>
  );
};

export default Login;
