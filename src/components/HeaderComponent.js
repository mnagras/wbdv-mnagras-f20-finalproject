import React from "react";
import {Link} from "react-router-dom";
import { connect } from 'react-redux';
import "../Header.css";
import Logo from "../images/foodlover.png";



 class HeaderComponent extends React.Component {
    constructor(props) {
        super(props)


        this.state = {
              user: {
                email: '',
                firstName: 'Rajiv'
              },
              loggedIn: false
            }
    }

    render() {
        return (
            <header className="Header">
                  <img src={Logo} className="Logo" alt="logo" />

                    <nav className="Nav">
                      <a href="/">Home</a>
                      <a href="/search/">Shop</a>
                      {!this.props.loggedIn && <a href="/login">Login</a>}
                      {this.props.loggedIn && <h6 className="loggedUser"> Hello
                         <a href="/profile" > {this.props.user.firstName} </a> </h6> }
                       {this.props.loggedIn &&   <a href="/login">Logout</a> }
                       { this.props.loggedIn &&  this.props.user.role === 'Admin' &&  <a href="/users">Users</a> }
                    </nav>

                  <button className="Burger">
                    🍔
                  </button>
                </header>
        )
    }
}

function mapState(state) {
    //const { users, authentication } = state;
    const { authenticationReducer } = state;
    const { user, loggedIn } = authenticationReducer;
    //return { user, users };
    return { user , loggedIn};
}

export default connect(mapState)(HeaderComponent);