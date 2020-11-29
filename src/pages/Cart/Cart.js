import React from "react";
import "./../../index.css";
import Layout from '../../components/Layout';
import InlineCard from '../../components/InlineCard';
import productImg from './../../assets/imgs/produto1.png';
import banner from './../../assets/imgs/banner3.jpg';
import Btn from '../../components/Btn';
import BannerOffer from './../../components/BannerOffer';
import DivBorder from '../../components/DivBorder';
import './style.css';

const Cart = () => {
    const productInfo = {
        name: 'Royal Canin - Adulto - 15kg',
        price: '235,99',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam euismod egestas sollicitudin. Nulla ut lectus nec arcu cursus fermentum ac ut ligula.',
        img: {
            src: productImg,
            alt: 'Ração Royal Canin',
        },
        status: 'Em estoque',
        amount: '20',
    }

    const offer = {
        src: banner,
        alt: "oferta",
    };

    return (
        <Layout>
            <div className="container cart-page">
                <DivBorder>
                    <h1>Carrinho</h1>
                    <InlineCard card={productInfo}/>
                    <div className="cart-info">
                        <a href='/'>Continuar Comprando</a>
                        <p className="cart-price">Valor Total: <strong>R$ 235,99</strong></p>
                        <Btn link="/checkout">Fechar Pedido</Btn>
                    </div>
                </DivBorder>
                <BannerOffer banner={offer} title="Confira Também" />
            </div>
        </Layout>
    );
};

export default Cart;