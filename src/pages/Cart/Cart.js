import React, { useEffect, useContext } from "react";
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
  const setPrice = productInfoContext.setTotalPrice;
  const totalPrice = productInfoContext.totalPrice;
  let content;
  const offer = {
    src: banner,
    alt: "Logotipo da Kirkland Signature em destaque, ao lado três pacotes de ração de gato da marca",
  };

  useEffect(() => {
    let aux = 0;
    productInfo.map(
      (single) => (aux = aux + parseFloat(single.price) * single.quantity)
    );
    setPrice(aux.toFixed(2));
  }, [productInfo, setPrice]);

  function handleExclude(id) {
    const newState = [...productInfo];

    // eslint-disable-next-line array-callback-return
    newState.map((single, index) => {
      if (single.id === id) {
        newState.splice(index, 1);
        setState(newState);
      }
    });
  }

  function hasItem() {
    return (
      <div>
        <a role="link" href="/">Continuar Comprando</a>
        <p className="cart-price">
          Valor Total: <strong>R$ {totalPrice}</strong>
        </p>
        <Btn link="/minha-conta">Fechar Pedido</Btn>
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
                <div onClick={() => handleExclude(single.id)}>
                  <span tabindex="0" className="remove-item">Excluir</span>
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
