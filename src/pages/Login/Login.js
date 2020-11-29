import React from "react";
import "./../../index.css";
import Layout from './../../components/Layout';
import Input from './../../components/Input';
import Btn from './../../components/Btn';
import DivBorder from '../../components/DivBorder';
import './style.css';

const Login = () => {
    return (
        <Layout>
            <div className="container form">
                <DivBorder>
                <   h1>Login</h1>
                    <form id="login-form">
                        <Input type="text" placeholder="login" id="login" name="login" label="Login" />
                        <Input type="password" placeholder="senha" id="password" name="password" label="Senha" />
                        <Btn link="/minha-conta">Login</Btn>
                        <Btn link="cadastra-se">Cadastrar-se</Btn>
                        <a href="/estoque">Admin</a>
                    </form>
                </DivBorder>
            </div>
        </Layout>
    );
};

export default Login;