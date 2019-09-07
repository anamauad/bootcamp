import React, { Component } from "react";

//Responsável por exibir a logo e o link para acessar o perfil.
class Header extends Component {
  render() {
    return (
      <div id="header">
        <div id="logo"></div>
        <div id="user">
          <span>Meu perfil</span>
        </div>
      </div>
    );
  }
}
export default Header;
