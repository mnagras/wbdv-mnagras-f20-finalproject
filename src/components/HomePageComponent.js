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
import { connect } from 'react-redux';
import { userActions } from '../actions/userActions';

class HomePageComponent extends React.Component {
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
               <p>This is my online store</p>
            </div>


        </div>
        )
    }
}

function mapState(state) {
    //const { users, authentication } = state;
    const { authenticationReducer } = state;
    const { user } = authenticationReducer;
    //return { user, users };
    return { user };
}

const actionCreators = {
    getUsers: userActions.getAll,
    deleteUser: userActions.delete
}

export default connect(mapState, actionCreators)(HomePageComponent);
