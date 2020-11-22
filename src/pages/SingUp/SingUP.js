import React from "react";
import "./../../index.css";
import Layout from '../../components/Layout';
import Input from '../../components/Input';
import Btn from '../../components/Btn';
import './style.css';

const SingUP = () => {
    return (
        <Layout>
            <div className="container form-sing-up">
            <h1>Cadastra-se</h1>
                <form id="login-form">
                    <Input type="text" placeholder="nome" name="name" label="Nome" />
                    <Input type="email" placeholder="e-mail"name="email" label="E-mail" />
                    <Input type="date" placeholder="nascimento" name="birth" label="Data de Nascimento" />
                    <Input type="text" placeholder="endereço" name="address" label="Endereço" />
                    <Input type="text" placeholder="login" name="login" label="Login" />
                    <Input type="password" placeholder="senha" id="password" name="password" label="Senha" />
                    <Btn link="/minha-conta">Cadastrar</Btn>
                </form>
            </div>
        </Layout>
    );
};

export default SingUP;
