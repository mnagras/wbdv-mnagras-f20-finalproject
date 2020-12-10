import React from "react";
import { Route, Link} from "react-router-dom";
import HeaderComponent from "./HeaderComponent";


export default class SearchComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            keyword: '',
            products: [],
            selectedProduct: {
                title: "",
                id: ""
            }
        }
    }

    keywordChanged = event => this.setState({keyword: event.target.value})
    searchProduct = () => {
        fetch(`http://localhost:9000/productListAPI/${this.state.keyword}`)
            .then(response => response.json())
             .then(this.renderProducts);

    }

    renderProducts = (statusCode) =>
        //console.log(products)
       this.setState({
          products: statusCode.body.products
       })


    productDetails = (productId) => {
        fetch(`http://localhost:9000/productAPI/${productId}`)
            .then(response => response.json())
            .then(this.setProduct)
    }

    setProduct = (statusCode) =>

        this.setState({
            selectedProduct: statusCode.body.product
        })

    render() {
        return (
        <div>
        <HeaderComponent/>
        <br/>
        <br/>
        <br/>
        <div className="container">
            <h2>Search</h2>
            <div className="input-group">
                <input value={this.state.keyword}
                onChange={this.keywordChanged}
                    className="form-control"
                    placeholder="keyword"/>
                <div className="input-group-append">

                    <button
                    onClick={this.searchProduct}

                    className="btn btn-primary">
                        Search
                    </button>
                </div>
            </div>
            <br/>

            <table className="table">
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Product Type</th>
                        <th>Price</th>
                        <th>Vendor</th>
                    </tr>
                    </thead>

                    <tbody>

            {
                this.state.products.map((product, index) => (
                product.title.includes(this.state.keyword) ?

                    <tr>
                     <td> <Link to={`/search/${product.id}`}> {product.title} </Link> </td>
                     <td> {product.product_type}</td>
                     <td> ${product.variants[0].price}</td>
                     <td> {product.vendor}</td>
                     </tr>

                    : null
                    )
                  )
            }

            </tbody>
            </table>


</div>
        </div>
        )
    }
}
