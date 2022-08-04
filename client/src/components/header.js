import React from "react";
import logo from "../assets/images/Logo_ML.png";
import "../assets/css/header.scss";

export default function Header() {
  return (
    <header id="header">
      <form className="header-container">
        <img className="logo" src={logo} alt="Mercado Libre Argentina" />
        <input
          type="text"
          className="input-search"
          placeholder="Nunca dejes de buscar"
        />
        <button type="submit" className="btn-search" />
      </form>
    </header>
  );
}
