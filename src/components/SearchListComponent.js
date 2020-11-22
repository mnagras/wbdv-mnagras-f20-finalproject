import React from "react";
import { Route, Link} from "react-router-dom";
import ProductComponent from "./ProductComponent";


export default class SearchListComponent extends React.Component {
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
        fetch("http://localhost:9000/testAPI")
            .then(response => response.json())
             .then(this.renderProducts)
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

            <div className="row">
                <div className="col-3">
            <ul className="list-group">
            {
                this.state.products.map((product, index) => (
                product.title.includes(this.state.keyword) ?
                    <div>
                    <li key={product.id} className="list-group-item">
                        Title: <Link to={`/osc/${product.id}`}> {product.title} </Link>

                        Price:$ {product.variants[0].price}

                    </li>
                    </div>
                    : null
                    )
                  )
            }
            </ul>

            </div>
            </div>

        </div>
        )
    }
}
