import React from "react";
import HeaderComponent from "./HeaderComponent";

export default class ProductComponent extends React.Component {
    state = {
        product: {
            title: "",
            id: "",
            image : { src : ""}
        }
    }
     componentDidMount() {
        const productId = this.props.match.params.productId;
        fetch("http://localhost:9000/productAPI/" + productId)
            .then(response => response.json())
            .then(this.setProduct)
     }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const productId = this.props.match.params.productId;
        const prevProductId = prevProps.match.params.productId
        if(productId !== prevProductId) {
            fetch("http://localhost:9000/productAPI/" + productId)
            .then(response => response.json())
            .then(this.setProduct)
          }
      }

    setProduct = (statusCode) =>
         this.setState({
             product: statusCode.body.product
         })

    render() {
        return (
        <div>
        <HeaderComponent/>
        <br/>
        <br/>
        <br/>
          <div className="container">
              <h3> Product Details </h3>
              <div className="row">
                <div className="col-3">
                <p></p>
                <div className="row">
                <div className="col-3">
                    <h5>{this.state.product.title}</h5>
                    </div>

                    </div>
                    <h6>{this.state.product.body_html}</h6>

                </div>
                <div className="col-15">
                    <img alt= "Product Image" width="200" src={this.state.product.image.src} />
                </div>
            </div>

            // only if logged in; else return log in alert
            <button className="btn btn-primary">Like</button>
            <button className="btn btn-success">Review</button>

          </div>

          <h5>People who liked this product also liked</h5>

          </div>
        );
      }
}