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
  const setState = productInfoContext.setState;
  const productInfo = productInfoContext.state;
  let content;
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
      setAmount(aux.toFixed(2));
    }
  }, [productInfo]);

  function handleExclue(id) {
    const newState = [...productInfo];
    {
      newState.map((single, index) => {
        if (single.id === id) {
          newState.splice(index, 1);
          setState(newState);
        }
        console.log("excluir");
      });
    }
  }

  console.log(productInfo);

  function hasItem() {
    return (
      <div>
        <a href="/">Continuar Comprando</a>
        <p className="cart-price">
          Valor Total: <strong>R$ {amount}</strong>
        </p>
        <Btn link="/checkout">Fechar Pedido</Btn>
      </div>
    );
  }

  function hasntItem() {
    return (
      <div>
        <p>Carrinho vazio!</p>
        <Btn link="/">Conferir produtos</Btn>
      </div>
    );
  }

  if (productInfo.length > 0) {
    content = hasItem();
  } else {
    content = hasntItem();
  }

  return (
    <Layout>
      <div className="container cart-page">
        <DivBorder>
          <h1>Carrinho</h1>
          {productInfo.map((single, index) => {
            return (
              <InlineCard key={index} card={single}>
                <div onClick={() => handleExclue(single.id)}>
                  <a href="#">Excluir</a>
                </div>
              </InlineCard>
            );
          })}

          <div className="cart-info">{content}</div>
        </DivBorder>
        <BannerOffer banner={offer} title="Veja Também" />
      </div>
    </Layout>
  );
};

export default Cart;
