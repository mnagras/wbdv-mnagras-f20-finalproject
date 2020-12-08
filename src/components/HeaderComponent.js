import React from "react";
import {Link} from "react-router-dom";
import "../Header.css";
import Logo from "../images/foodlover.png";

export default class HeaderComponent extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <header className="Header">
                  <img src={Logo} className="Logo" alt="logo" />

                    <nav className="Nav">
                      <a href="/">Home</a>
                      <a href="/login">Login</a>
                      <a href="/search/">Shop</a>

                    </nav>

                  <button className="Burger">
                    🍔
                  </button>
                </header>
        )
    }
}