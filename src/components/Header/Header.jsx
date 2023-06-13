import React from 'react'
import "./Header.scss";
import { FaSearch, FaShoppingCart, FaTimes } from "react-icons/fa";
import { useState } from "react";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";

const links = [
  { href: "/", text: "home" },
  { href: "/basket", text: "basket" },
];


const Header = () => {
  const [toggleSearch, setToggleSearch] = useState(false);
  const [toggleCart, setToggleCart] = useState(false);

  const onToggleSearch = (e) => {
    setToggleSearch(!toggleSearch);
  };

  const onToggleCart = (e) => {
    setToggleCart((old) => !old);
  };

 
  return (
      <header className="App-header">
      <div className="container">
        <Link to="/" className="logo">
          music store
        </Link>
        </div>
        </header>
   )
}

export default Header
