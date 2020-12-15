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
             <div >
             <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
               <img src={Logo} className="Logo" alt="logo" />
               <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                 <span class="navbar-toggler-icon"></span>
               </button>
               <div class="collapse navbar-collapse" id="collapsibleNavbar">
                 <ul class="navbar-nav">
                   <li class="nav-item">
                     <Link to="/home" class="nav-link" >Home</Link>
                   </li>
                   <li class="nav-item">
                     <Link to="/search" class="nav-link">Products</Link>
                   </li>
                   <li class="nav-item">
                     <Link to="/users" class="nav-link">Users</Link>
                    </li>
                    </ul>
                    <div className="nav navbar-nav pull-md-right">
                    <ul class="nav navbar-nav">
                   <li class="nav-item">
                      {!this.props.loggedIn && <a href="/login" class="nav-link">Login</a>}
                      {this.props.loggedIn &&   <a href="/login" class="nav-link">Logout</a> }
                         </li>
                         <li class="nav-item">
                       {this.props.loggedIn &&  <span className="nav-bar-text" >  Hello
                          <a href="/profile" > {this.props.user.firstName} </a> </span> }
                   </li>
                   </ul>
                   </div>

               </div>
             </nav>
             </div>
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