import React from "react";
import Style from "./style.css";
import { Link } from "react-router-dom";

const Btn = ({ link, children }) => {
  return (
    <>
      <Link to={link} className="product-btn">
        {children}
      </Link>
    </>
  );
};

export default Btn;
