import React, { useState, useContext } from "react";
import "./style.css";
import menuIcon from "./../../assets/icons/menu-icon.svg";
import cartIcon from "./../../assets/icons/cart.svg";
import closeIcon from "./../../assets/icons/close.png";
import FontSizeChanger from "react-font-size-changer";
import Logo from "./../../assets/imgs/logo.png";
import searchWhiteIcon from "../../assets/icons/search-white.png";
import Search from "../Search";
import { Link } from "react-router-dom";
import { store } from "../../store";

const Header = ({ menuList }) => {
  const [menuOpen, setmenuOpen] = useState(false);
  const [searchOpen, setsearchOpen] = useState(false);
  const productInfoContext = useContext(store);
  const productQtde = productInfoContext.state.length;

  function openMenu() {
    setmenuOpen(!menuOpen);
  }

  function openSearch() {
    setsearchOpen(!searchOpen);
  }

  return (
    <header id="header">
      <div className="container">
        <nav id="nav-menu" className={menuOpen ? "open" : ""}>
          <ul id="target2">
            {menuList.map((menuItem, index) => (
              <li key={index}>
                <a href={menuItem.link}>{menuItem.text}</a>
              </li>
            ))}
          </ul>
        </nav>

        <img
          className="icon"
          src={menuIcon}
          alt="Menu hamburguer"
          onClick={openMenu}
        />

        <Link to="/" className="site-title">
          <img src={Logo} alt="logo do pet shop" />
        </Link>

        <div className="right">
          <div className="header-search" onClick={openSearch}>
            <img
              src={searchOpen ? closeIcon : searchWhiteIcon}
              alt="Ícone de pesquisa"
            />
          </div>
          <FontSizeChanger
            targets={["#target", "#target2"]}
            onChange={(element, newValue, oldValue) => {
              console.log(element, newValue, oldValue);
            }}
            options={{
              stepSize: 2,
              range: 4,
            }}
            customButtons={{
              up: <span style={{ fontSize: "25px" }}>A</span>,
              down: <span style={{ fontSize: "14px" }}>A</span>,
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
            className={productQtde > 0 ? "cart-icon" : "cart-icon hidden"}
            href="/carrinho"
          >
            <img className="icon" src={cartIcon} />
            <div className="cart-qtde">{productQtde}</div>
          </a>
        </div>
      </div>
      <div className={searchOpen ? "search open" : "search"}>
        <Search />
      </div>
    </header>
  );
};

export default Header;
