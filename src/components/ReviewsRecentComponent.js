import React from "react";
import { Route, Link} from "react-router-dom";
import HeaderComponent from "./HeaderComponent";

export default class ReviewsRecentComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: '',

            reviews: [],
            selectedReview: ''
        }
    }

    componentDidMount() {
            fetch(`https://cs4550-final-node-mnagras.herokuapp.com/reviews/recent`)
              .then(response => response.json())
               .then(this.renderReviews);
            }

    keywordChanged = event => this.setState({keyword: event.target.value})


    renderReviews = (statusCode) =>
        //console.log(products)
       this.setState({
          reviews: statusCode
       })


    render() {
        return (
            <ul className="container">
                { this.state.reviews.map((review, index) => (
                <li>
                    <h6> <Link to={`/profile/${review.userId}`}> {review.firstName} {review.lastName} commented </Link> </h6>
                    <p> {review.comment} </p>
                </li>
                ))
                }
          </ul>

            : null
        )
    }

}