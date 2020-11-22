import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import OnlineShopClient from "./OnlineShopClient";
import ProductComponent from "./ProductComponent.js";

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
                      <Link to="/osc">Shop</Link> |
                      <Route path="/osc"  component={OnlineShopClient}/>
                      <Route path="/osc/:productId" component={ProductComponent} />
                    </div>
            </Router>
        )
    }

}

export default ShopManager