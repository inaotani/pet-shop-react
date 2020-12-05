import React, { Children } from "react";
import "./style.css";
import Input from "./../Input";
import { Link } from "react-router-dom";

const InlineCard = ({ card, type, children }) => {
  let version;

  function cartCard(card) {
    return (
      <div>
        <p className="product-price">R$ {card.price}</p>
        <Input
          className="product-qtde"
          type="number"
          name="product-qtde"
          value={card.quantity}
        />
        {children}
      </div>
    );
  }

  function adminCard(card) {
    return (
      <div>
        <p>{card.description}</p>
        <p>Vendidos: {card.sold}</p>
        <p>Preço: {card.price}</p>
        <p>Qtde: {card.stock}</p>
        <div className="product-option">
          <Link to={`/p-edit/${card._id}`}>Editar</Link>
          <a href="#">Excluir</a>
        </div>
      </div>
    );
  }

  if (type === "admin") {
    version = adminCard(card);
  } else {
    version = cartCard(card);
  }

  return (
    <div className="inline-card">
      <img src={"data:image/png;base64," + card.photo} alt={card.name} />
      <div className="product-info">
        <h3 className="product-name">
          <a href={`/p/${card.id}`}>{card.name}</a>
        </h3>
        {version}
      </div>
    </div>
  );
};

export default InlineCard;
