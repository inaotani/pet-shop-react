import React from "react";
import "./../../index.css";
import Layout from '../../components/Layout';
import Input from '../../components/Input';
import Btn from '../../components/Btn';
import DivBorder from '../../components/DivBorder';
import './style.css';

const SingUP = () => {
    return (
        <Layout>
            <div className="container form-sing-up">
                <DivBorder>
                    <h1>Cadastra-se</h1>
                    <form id="login-form">
                        <Input type="text" placeholder="nome completo" name="name" label="Nome Completo" />
                        <Input type="email" placeholder="email@xxx.xx"name="email" label="E-mail" />
                        <Input type="password" placeholder="senha" id="password" name="password" label="Senha" />
                        <Input type="date" placeholder="xx/xx/xxxx" name="birth" label="Data de Nascimento" />
                        <Input type="text" placeholder="(xx) xxxxx-xxxx" name="phone" label="Celular" />
                        <Input type="text" placeholder="endereço, num - cidade - UF" name="address" label="Endereço" />
                        <Btn link="/minha-conta">Cadastrar</Btn>
                    </form>
                </DivBorder>
            </div>
        </Layout>
    );
};

export default SingUP;
