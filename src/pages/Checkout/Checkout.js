import React from 'react';
import Layout from '../../components/Layout';
import Btn from '../../components/Btn';
import './style.css';

const Checkout = () => {
    return (   
        <Layout>
            <div className="container checkout">
                <h1>Checkout</h1>
                <div className="person-info">
                    <h2>Informações de Pessoais</h2>
                    <p>
                        Joe Doe<br />
                        Av. São Carlos, 2020 - Centro<br/>
                        01/01/200<br/>
                    </p>
                </div>

                <div className="order-info">
                    <h2>Informações do Pedido</h2>
                    <p>
                        Royal Canin - Adulto - 15kg<br/>
                        1x R$ 235,99<br/>
                    </p>
                </div>

                <div className="payment-info">
                    <h2>Informações do Pagamento</h2>
                    <p>
                        Cartão Nubank<br/>
                        Num. xxxx.xxxx.xxxx.2020<br/>
                        1x de 235,99
                    </p>
                </div>
                <Btn link="/minha-conta">Finalizar</Btn>
            </div>
        </Layout>
        
    );
};

export default Checkout;