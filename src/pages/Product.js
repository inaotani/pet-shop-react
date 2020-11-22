import React from "react";
import "./../index.css";
import Layout from './../components/Layout';
import ProductDisplay from './../components/ProductDisplay';
import productImg from './../assets/imgs/produto1.png';

const Product = () => {
    const produtInfo = {
        name: 'Royal Canin - Adulto - 15kg',
        price: '235,99',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam euismod egestas sollicitudin. Nulla ut lectus nec arcu cursus fermentum ac ut ligula.',
        img: {
            src: productImg,
            alt: 'Ração Royal Canin',
        }
    }
    return (
        <Layout>
            <ProductDisplay product={{
                name: produtInfo.name, 
                price: produtInfo.price,
                description: produtInfo.description,
                img: produtInfo.img,
            }} />
        </Layout>
    );
};

export default Product;