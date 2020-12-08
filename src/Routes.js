import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import OnlineShopClient from "./components/OnlineShopClient";
import SearchComponent from "./components/SearchComponent";
import ProductComponent from "./components/ProductComponent.js";
import LoginComponent from "./components/LoginComponent";
import RegisterComponent from "./components/RegisterComponent";
import ProfileComponent from "./components/ProfileComponent";
import HomePageComponent from "./components/HomePageComponent";

export default (
<Route path="/" component={HomePageComponent}>

    <Route path="/home" component={HomePageComponent}/>
    <Route path="/search"  component={SearchComponent}/>
    <Route path="/search/:keyword"  component={SearchComponent}/>
    <Route path="/login" component={LoginComponent}/>
    <Route path="/search/:productId" component={ProductComponent} />
    <Route path="/register" component={RegisterComponent}/>
    <Route path="/profile" component={ProfileComponent}/>
</Route>
)

