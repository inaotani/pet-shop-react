import React, {useState, useEffect} from "react";
import "./../../index.css";
import Layout from '../../components/Layout';
import InlineCard from '../../components/InlineCard';
import productImg from './../../assets/imgs/produto1.png';
import banner from './../../assets/imgs/banner3.jpg';
import './style.css';

const Cart = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      async function getProducts() {
        const response = await fetch(
          "https://petshop-backend.vercel.app/api/supply"
        );
        const data = await response.json();
        setProducts(data);
      }
  
      getProducts();
    }, []);

    console.log(products);


    return (
        <Layout>
            <div className="container">
                <h1>Estoque</h1>
                {products.map((single, index) => (
                    <InlineCard
                    key= {single.name + index}
                        card={single}
                        type="admin"
                    />
                    ))}
            </div>
        </Layout>
    );
};

export default Cart;