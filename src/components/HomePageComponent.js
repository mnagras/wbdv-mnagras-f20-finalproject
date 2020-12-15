import React from "react";
import {BrowserRouter as Router, Route, Link, Redirect, Switch} from "react-router-dom";
//import OnlineShopClient from "./OnlineShopClient";
import SearchComponent from "./SearchComponent";
import ProductComponent from "./ProductComponent.js";
import LoginComponent from "./LoginComponent";
import RegisterComponent from "./RegisterComponent";
import ProfileComponent from "./ProfileComponent";
import HeaderComponent from "./HeaderComponent";
import UsersRecentComponent from "./UsersRecentComponent";
import ReviewsRecentComponent from "./ReviewsRecentComponent";
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
             <div class="container">
                <div class="jumbotron">
                 <h1>Manami Foodie Club </h1>
                 <p>Welcome to the World of Snacks. This site is for everyone who loves snacks and
                 wants to share their thoughts on all types of food.</p>
                 </div>
                 {this.props.loggedIn
                  ? (<div class="jumbotron">
                 <h1>Logged in User </h1>
                 <p>We are getting some exciting new things! Keep an eye out!</p>
                 </div>)
                 : (<div class="jumbotron">
                    <h1>Hello Anonymous User </h1>
                    <p>Please join our blog for all food related topics</p>
                    </div>)

                 }

                 <h5>Recent Registered Users</h5>
                 <UsersRecentComponent/>

               <h5>Recent Comments</h5>
               <ReviewsRecentComponent/>
             </div>
        </div>
        )
    }
}

function mapState(state) {
    const { authenticationReducer } = state;
    const { user, loggedIn } = authenticationReducer;
    return { user, loggedIn };
}

const actionCreators = {
    getUsers: userActions.getAll,
    deleteUser: userActions.delete
}

export default connect(mapState, actionCreators)(HomePageComponent);
