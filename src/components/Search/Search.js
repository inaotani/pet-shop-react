import React from 'react';
import Input from './../Input';
import './style.css';
import searchIcon from './../../assets/icons/search.png';

const Search = () => {
    return(
        <div id="search">
            <div className="container">
                <div className="search-inputs">
                    <Input type="text" name="search" placeholder="O que você procura?" className="input-search" />
                    <input type="submit" className="input-submit" value=" " style={{backgroundImage: "url(" + searchIcon + ")"}}/>
                </div>
            </div>
        </div>
    );
};

export default Search;