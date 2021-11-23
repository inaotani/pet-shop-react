import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Btn = ({ link, children }) => {
  return (
    <>
      <Link to={link} role="button" className="product-btn">
        {children}
      </Link>
    </>
  );
};

export default Btn;
