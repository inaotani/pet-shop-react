import React, { useContext } from "react";
import "./style.css";
import Btn from "./../Btn";
import cartIcon from "./../../assets/icons/cart.svg";
import { store } from "../../store";

const ProductDisplay = ({ product }) => {
  const globalStore = useContext(store);
  const { state, setState } = globalStore;

  function handleBuy() {
    const newState = [...state];
    newState.push({
      name: product.name,
      price: product.price,
      img: product.photo,
      quantity: 2,
      id: product._id,
    });
    setState(newState);
  }
  return (
    <div className="product-display container">
      <h1>{product.name}</h1>
      <div className="product-hero">
        <img
          className="product-img"
          src={"data:image/png;base64," + product.photo}
          alt={product.name}
        />
        <div className="wrap" onClick={handleBuy}>
          <p className="product-price">R$ {product.price}</p>
          <Btn link="/carrinho">
            <img src={cartIcon} />
            Adicionar ao carrinho
          </Btn>
          <p className="product-information">{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
