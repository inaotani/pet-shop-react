import React from "react";
import "./../../index.css";
import Layout from "../../components/Layout";
import Input from "../../components/Input";
import Btn from "../../components/Btn";
import DivBorder from "../../components/DivBorder";
import "./style.css";
import { Link, useHistory } from "react-router-dom";

const SingUP = () => {
  let history = useHistory();
  function handleAdd(e) {
    e.preventDefault();
    const json = JSON.stringify({
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
      birth: e.target.birth.value,
      phone: e.target.phone.value,
      address: e.target.address.value,
    });

    async function addUser() {
      const url = `https://petshop-backend.vercel.app/api/user`;

      const requestOption = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      };

      const response = await fetch(url, requestOption).then((response) => {
        if (response.status === 200) {
          history.push("/login");
        } else {
          alert("Error ao cadastrar");
        }
      });
    }
    addUser();
  }
  return (
    <Layout>
      <div className="container form-sing-up">
        <DivBorder>
          <h1>Cadastra-se</h1>
          <form id="login-form" onSubmit={handleAdd}>
            <Input
              type="text"
              placeholder="nome completo"
              name="name"
              label="Nome Completo"
              id="name"
            />
            <Input
              type="email"
              placeholder="email@xxx.xx"
              name="email"
              label="E-mail"
              id="email"
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
            <Input
              type="date"
              placeholder="xx/xx/xxxx"
              name="birth"
              label="Data de Nascimento"
              id="birth"
            />
            <Input
              type="text"
              placeholder="(xx) xxxxx-xxxx"
              name="phone"
              label="Celular"
              id="phone"
            />
            <Input
              type="text"
              placeholder="endereço, num - cidade - UF"
              name="address"
              label="Endereço"
              id="address"
            />
            <input type="submit" value="Cadastrar" />
          </form>
        </DivBorder>
      </div>
    </Layout>
  );
};

export default SingUP;
