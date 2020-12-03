import React, { Component } from "react";
import "./../../index.css";
import Layout from "./../../components/Layout";
import Input from "./../../components/Input";
import Btn from "./../../components/Btn";
import DivBorder from "../../components/DivBorder";
import "./style.css";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const json = JSON.stringify({
      email: "chega_por_hj@gmail.com",
      password: "asdfasdfasdf",
    });

    const url = "https://petshop-backend.vercel.app/api/login";

    const requestOption = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: json,
    };

    fetch(url, requestOption);
  }

  render() {
    return (
      <Layout>
        <div className="container form">
          <DivBorder>
            <h1>Login</h1>
            <form id="login-form" method="POST" onSubmit={this.handleSubmit}>
              <Input
                type="text"
                placeholder="e-mail"
                id="email"
                name="email"
                label="E-mail"
              />
              <Input
                type="password"
                placeholder="senha"
                id="password"
                name="password"
                label="Senha"
              />
              <Input type="submit" placeholder="senha" value="Entrar" />
              <Btn link="cadastra-se">Cadastrar-se</Btn>
              <a href="/estoque">Admin</a>
            </form>
          </DivBorder>
        </div>
      </Layout>
    );
  }
}
