import logo from './logo.svg';
import './App.css';
import React from "react";
import { Router, Route, Link, Switch,Redirect} from "react-router-dom";
import SearchComponent from "./components/SearchComponent";
import ProductComponent from "./components/ProductComponent.js";
import LoginComponent from "./components/LoginComponent";
import RegisterComponent from "./components/RegisterComponent";
import ProfileComponent from "./components/ProfileComponent";
import HomePageComponent from "./components/HomePageComponent";
import UsersComponent from "./components/UsersComponent";
import history from './history';

function App() {
  return (
    <Router history={history}>
        <Switch>
             <Route exact path="/" component={HomePageComponent}/>
             <Route exact path="/home"  component={HomePageComponent}/>
             <Route path="/search/:keyword" component={SearchComponent} />
              <Route  path="/search"  component={SearchComponent}/>
              <Route path="/login" component={LoginComponent}/>
              <Route path="/profile/:userId" component={ProfileComponent} />
              <Route path="/details/:productId" component={ProductComponent} />
              <Route path="/register" component={RegisterComponent}/>
              <Route path="/profile" component={ProfileComponent}/>
              <Route path="/users" component={UsersComponent}/>
        </Switch>
    </Router>
  );
}

export default App;
