import React from "react";
import Input from "./../Input";
import "./style.css";
import searchIcon from "./../../assets/icons/search.png";
import { useHistory } from "react-router-dom";

const Search = () => {
  let history = useHistory();
  function handleSubmit(e) {
    e.preventDefault();
    const term = e.target.term.value;
    history.push(`/busca/${term}`);
  }
  return (
    <div id="search">
      <form className="container" method="POST" onSubmit={handleSubmit}>
        <div className="search-inputs">
          <Input
            type="text"
            name="term"
            id="term"
            placeholder="O que você procura?"
            className="input-search"
          />
          <input
            type="submit"
            className="input-submit"
            value=" "
            style={{ backgroundImage: "url(" + searchIcon + ")" }}
          />
        </div>
      </form>
    </div>
  );
};

export default Search;
