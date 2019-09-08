import React, { Component } from "react";

import "./Header.css";

import logo from "../assets/fb.svg";

//Responsável por exibir a logo e o link para acessar o perfil.
class Header extends Component {
  render() {
    return (
      <header id="main-header">
        <img class="logo" src={logo} alt="logo do facebook" />
        <span>
          Meu perfil <i className="material-icons">account_circle</i>
        </span>
      </header>
    );
  }
}
export default Header;
