import React from "react";
import Style from "./style.css";

const Btn = ({link, children}) => {
  return (
    <>
    <a href={link} className="product-btn">
      {children}
    </a>
    </>
  );
};

export default Btn;
