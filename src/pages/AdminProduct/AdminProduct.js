import React from "react";
import "./../../index.css";
import Layout from '../../components/Layout';
import InlineCard from '../../components/InlineCard';
import productImg from './../../assets/imgs/produto1.png';
import banner from './../../assets/imgs/banner3.jpg';
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
            <div className="container">
                <h1>Estoque</h1>
                <InlineCard type="admin" card={productInfo}/>
                <InlineCard type="admin" card={productInfo}/>
                <InlineCard type="admin" card={productInfo}/>
                <InlineCard type="admin" card={productInfo}/>
            </div>
        </Layout>
    );
};

export default Cart;