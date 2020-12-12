import React from "react";
import HeaderComponent from "./HeaderComponent";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { fa-thumbs-down, fa-thumbs-up } from '@fortawesome/fontawesome-free-solid'
import { connect } from 'react-redux';
import Avatar from "../images/FemaleAvatar5.svg";
import { Route, Link} from "react-router-dom";

class ProductComponent extends React.Component {

constructor(props) {
        super(props);
        this.state = {
        product: {
            title: "",
            id: "",
            image : { src : "img"}
        },
        reviewObject: {
            userId: "",
            productId: "",
            date: "",
            comment: ""
        },
        reviews : [],
        bCommenting : false,

    }
    this.changeHandler = this.changeHandler.bind(this);
    this.saveComment = this.saveComment.bind(this);
    }

     componentDidMount() {
        const productId = this.props.match.params.productId;

         Promise.all([
                fetch('http://localhost:9000/productAPI/' + productId),
                fetch('http://localhost:9000/reviews/' + productId)
            ]).then(([res1, res2]) => Promise.all([res1.json(), res2.json()])).then(([data1, data2]) => this.setState({
                product: data1.body.product,
                reviews : data2
            }));

            /*
        fetch("http://localhost:9000/reviews/" + productId)
                    .then(response => response.json())
                    .then(this.setReviews);

        fetch("http://localhost:9000/productAPI/" + productId)
            .then(response => response.json())
            .then(this.setProduct);
            */
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

    changeHandler(e) {
        e.persist();
        let store = this.state;
        store.reviewObject[e.target.id] = e.target.value;
        store.reviewObject.date = new Date().toUTCString();
        store.reviewObject.userId = this.props.user.userId;
        store.reviewObject.productId = this.state.product.id;
        this.setState(store);
    }

      setReviews = (statusCode) =>
        this.setState({
            reviews: statusCode
        })

    setProduct = (statusCode) =>
         this.setState({
             product: statusCode.body.product
         })

    addComment(){
         this.setState({
             bCommenting:true
         })
    }

     saveComment = (e) => {
        e.preventDefault();
        fetch("http://localhost:9000/reviews",
         {
             method: "POST",
             headers: {
                 "content-type": "application/json"
             },
             body: JSON.stringify(this.state.reviewObject)
         })
        .then(response => response.json())
        .then(this.unsetCommentMode)
     }

     unsetCommentMode = (data) => {
         this.setState({
            bCommenting: false,
            reviews: data
         });
     }

    myFunction(x) {
      x.classList.toggle("fa-thumbs-down");
    }
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




          </div>
          <div className="container">
          <h5>Reviews </h5>
          {!this.props.loggedIn &&   <a href="/login">Login</a>  }
          {this.props.loggedIn && !this.state.bCommenting  &&
            <button className="btn btn-sm btn-success" onClick={()=>{this.addComment()}}>Comment</button>
           }
          { this.props.loggedIn && this.state.bCommenting &&
             <div>
                <i onclick="myFunction(this)" class="fa fa-thumbs-up"></i>
                <textarea id="comment" className="commentInput" placeholder=" Add Comment here....."
                 onChange={this.changeHandler}>
                 </textarea>
              <button className="btn btn-sm btn-success" onClick={this.saveComment}>Submit</button>
              </div>
           }

         </div>
         <ul className="container">
         { this.state.reviews.map((review, index) => (
         <li> <div class="media border p-3">
             <img src={Avatar} class = "mr-3 mt-3 rounded-circle" style={{"width":"60px"}} />
             <div class="media-body">
             <h4> <Link to={`/profile/${review.userId}`}> {review.lastName} {review.firstName} </Link> <small> <i> Posted on {review.date}</i> </small></h4>
             { review.bLike && <i className="fa fa-thumbs-down" aria-hidden="true"> Like </i> }
             { !review.bLike && <i className="fa fa-thumbs-up" aria-hidden="true"> DisLike</i> }
             <p> Comment :  {review.comment} </p>
             </div>
         </div> </li>
         )
         )
         }


         </ul>


          </div>
        );
      }
}

function mapState(state, ownProps) {
    const { authenticationReducer } = state;
    const { user, loggedIn } = authenticationReducer;
    return { user , loggedIn};
}

export default connect(mapState)(ProductComponent);