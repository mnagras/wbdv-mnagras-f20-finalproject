import React from "react";
import SearchListComponent from "./SearchListComponent";
import ProductComponent from "./ProductComponent";


export default class OnlineShopClient extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
        <div>
            <h1>M Store</h1>
            <SearchListComponent/>
        </div>
        )
    }
}
