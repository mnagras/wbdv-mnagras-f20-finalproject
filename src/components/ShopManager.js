import React from "react";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import OnlineShopClient from "./OnlineShopClient";
import SearchComponent from "./SearchComponent";
import ProductComponent from "./ProductComponent.js";
import LoginComponent from "./LoginComponent";
import RegisterComponent from "./RegisterComponent";
import ProfileComponent from "./ProfileComponent";
import HomePageComponent from "./HomePageComponent";

class ShopManager extends React.Component {
    state = {
            courses: []
        }

     constructor(props) {
              super(props);
              this.courseTitleFld = React.createRef();
            }

    render() {
        return(
            <Router>

                    <div className="container">
                    <Link to="/home">Home</Link> |
<Switch>
                      <Route path="/home" component={HomePageComponent}/>

                      <Route path="/search/:keyword"  component={SearchComponent}/>
                      <Route path="/login" component={LoginComponent}/>
                      <Route path="/search/:productId" component={ProductComponent} />
                      <Route path="/register" component={RegisterComponent}/>
                      <Route path="/profile" component={ProfileComponent}/>
                      </Switch>

                    </div>

            </Router>
        )
    }

}

export default ShopManager