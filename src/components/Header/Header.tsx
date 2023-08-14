import React from "react";
import "./header.css";
import Logo from "../../assets/logo2.png";

export default function Header() {
  return (
    <div className="header">
      <div className="header__logo-wrapper">
        <img className="header__logo" src={Logo} alt="logo" />
        <p>BeAcTracker</p>
      </div>
      <button>Выйти</button>
    </div>
  );
}
