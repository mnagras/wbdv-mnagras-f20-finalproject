import logo from './logo.svg';
import './App.css';
import React from "react";
import {BrowserRouter, Route, Link, Switch} from "react-router-dom";
import OnlineShopClient from "./components/OnlineShopClient";
import SearchComponent from "./components/SearchComponent";
import ProductComponent from "./components/ProductComponent.js";
import LoginComponent from "./components/LoginComponent";
import RegisterComponent from "./components/RegisterComponent";
import ProfileComponent from "./components/ProfileComponent";
import HomePageComponent from "./components/HomePageComponent";

function App() {
  return (
    <BrowserRouter>
        <Switch>
             <Route exact path="/" component={HomePageComponent}/>
             <Route exact path="/home"  component={HomePageComponent}/>
              <Route exact path="/search"  component={SearchComponent}/>
              <Route path="/login" component={LoginComponent}/>
              <Route path="/search/:productId" component={ProductComponent} />
              <Route path="/register" component={RegisterComponent}/>
              <Route path="/profile" component={ProfileComponent}/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
