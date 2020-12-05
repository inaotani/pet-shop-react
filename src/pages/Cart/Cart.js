import React, { useEffect, useState, useContext } from "react";
import "./../../index.css";
import Layout from "../../components/Layout";
import InlineCard from "../../components/InlineCard";
import banner from "./../../assets/imgs/banner3.jpg";
import Btn from "../../components/Btn";
import BannerOffer from "./../../components/BannerOffer";
import DivBorder from "../../components/DivBorder";
import "./style.css";
import { store } from "../../store";

const Cart = () => {
  const productInfoContext = useContext(store);
  const productInfo = productInfoContext.state;
  const offer = {
    src: banner,
    alt: "oferta",
  };

  const [amount, setAmount] = useState(0);
  useEffect(() => {
    {
      let aux = 0;
      productInfo.map((single, index) => {
        aux = aux + parseFloat(single.price) * single.quantity;
      });
      setAmount(aux);
    }
  }, [productInfo]);

  return (
    <Layout>
      <div className="container cart-page">
        <DivBorder>
          <h1>Carrinho</h1>
          {productInfo.map((single, index) => {
            return <InlineCard key={index} card={single} />;
          })}

          <div className="cart-info">
            <a href="/">Continuar Comprando</a>
            <p className="cart-price">
              Valor Total: <strong>R$ {amount}</strong>
            </p>
            <Btn link="/checkout">Fechar Pedido</Btn>
          </div>
        </DivBorder>
        <BannerOffer banner={offer} title="Veja Também" />
      </div>
    </Layout>
  );
};

export default Cart;
