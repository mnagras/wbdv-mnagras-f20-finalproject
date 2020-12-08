import React from "react";
import {BrowserRouter as Router, Route, Link, Redirect, Switch} from "react-router-dom";
import OnlineShopClient from "./OnlineShopClient";
import SearchComponent from "./SearchComponent";
import ProductComponent from "./ProductComponent.js";
import LoginComponent from "./LoginComponent";
import RegisterComponent from "./RegisterComponent";
import ProfileComponent from "./ProfileComponent";
import HeaderComponent from "./HeaderComponent";
import '../App.js';

export default class HomePageComponent extends React.Component {
constructor(props) {
        super(props)
    }

    render() {
        return (
        <div>
            <HeaderComponent/>
            <br/>
            <br/>
            <br/>
            <div className="container">
              <Link to="/profile">My Profile</Link>
            </div>

        <p>This is my online store</p>
        </div>
        )
    }
}