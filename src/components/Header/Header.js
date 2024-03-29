import React, { useState, useContext } from "react";
import "./style.css";
import menuIcon from "./../../assets/icons/menu-icon.svg";
import cartIcon from "./../../assets/icons/cart.svg";
import FontSizeChanger from "react-font-size-changer";
import Logo from "./../../assets/imgs/logo.png";
import Contrast from "./../../assets/icons/contrast.svg";
import { Link } from "react-router-dom";
import { store } from "../../store";

const Header = ({ menuList }) => {
  const [menuOpen, setmenuOpen] = useState(false);
  const productInfoContext = useContext(store);
  const productQtde = productInfoContext.state.length;
  const setContrast = productInfoContext.setContrast;
  const contrast = productInfoContext.contrast;

  function openMenu() {
    setmenuOpen(!menuOpen);
  }

  return (
    <header id="header">
      <div className="container">
        <nav role="navigation" id="nav-menu" className={menuOpen ? "open" : ""}>
          <ul id="target2">
            {menuList.map((menuItem, index) => (
              <li role="menuitem" key={index}>
                <a role="link" href={menuItem.link}>
                  {menuItem.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <img
          role="menu"
          className="icon"
          src={menuIcon}
          alt="Menu hamburguer"
          onClick={openMenu}
        />

        <Link to="/" className="site-title">
          <img role="img" src={Logo} alt="logo do pet shop" />
        </Link>

        <div className="right">
          <img
            role="img"
            className="contrast"
            src={Contrast}
            alt="botão de contraste"
            onClick={() => setContrast(!contrast)}
          />
          <FontSizeChanger
            targets={["#target", "#target2"]}
            options={{
              stepSize: 2,
              range: 4,
            }}
            customButtons={{
              up: (
                <span tabindex="0" style={{ fontSize: "25px" }}>
                  A
                </span>
              ),
              down: (
                <span tabindex="0" style={{ fontSize: "14px" }}>
                  A
                </span>
              ),
              style: {
                backgroundColor: "white",
                color: "#8643f3",
                WebkitBoxSizing: "border-box",
                WebkitBorderRadius: "5px",
                width: "30px",
                height: "30px",
                lineHeight: "30px",
              },
              buttonsMargin: 5,
            }}
          />
          <a
            role="link"
            className={productQtde > 0 ? "cart-icon" : "cart-icon hidden"}
            href="/carrinho"
          >
            <img
              role="img"
              className="icon"
              src={cartIcon}
              alt="carrinho de compras"
            />
            <div className="cart-qtde">{productQtde}</div>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
