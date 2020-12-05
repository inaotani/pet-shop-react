import React, { Children } from "react";
import "./style.css";
import Input from "./../Input";

const InlineCard = ({ card, type, children }) => {
  let version;

  function handleExclue(id) {
    console.log(id);
  }

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
        <div onClick={handleExclue(card.id)}>
          <a href="#">Excluir</a>
        </div>
        {children}
      </div>
    );
  }

  function adminCard(card) {
    return (
      <div>
        <p>{card.description}</p>
        <p>Status: {card.status}</p>
        <p>Preço: {card.price}</p>
        <p>Qtde: {card.amount}</p>
        <div className="product-option">
          <a href="#">Editar</a>
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
      <img src={"data:image/png;base64," + card.img} alt={card.name} />
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
