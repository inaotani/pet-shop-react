import React, { useContext, useState } from "react";
import "./style.css";
import Btn from "./../Btn";
import cartIcon from "./../../assets/icons/cart.svg";
import { store } from "../../store";

const ProductDisplay = ({ product }) => {
  const globalStore = useContext(store);
  const { state, setState } = globalStore;
  const [qtde, setQtade] = useState(1);

  function handleBuy() {
    const newState = [...state];
    newState.push({
      name: product.name,
      price: product.price,
      photo: product.photo,
      quantity: qtde,
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
        <div className="wrap">
          <p className="product-price">R$ {product.price}</p>
          <input
            className="product-qtde"
            type="number"
            name="productqtde"
            id="productqtde"
            min="1"
            defaultValue="1"
            onChange={(e) => setQtade(e.target.value)}
          />
          <div onClick={handleBuy}>
            <Btn link="/carrinho">
              <img src={cartIcon} />
              Adicionar ao carrinho
            </Btn>
          </div>
          <p className="product-information">{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
