import React from "react";
import { connect } from 'react-redux';
import { Route, Link} from "react-router-dom";
import HeaderComponent from "./HeaderComponent";


class ProfileComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        user : '',
        reviews : [],
        followers: [],
        following: [],
        loggedInUser : false,
        message: '',
        pwdUpdated: false
        }
        this.changeHandler = this.changeHandler.bind(this);
    }

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId)
            userId = this.props.user.userId;
        if (this.props.user && this.props.user.userId === parseInt(userId))
          this.setState({ loggedInUser : true})

         Promise.all([
                fetch('https://cs4550-final-node-mnagras.herokuapp.com/users/' + userId),
                fetch('https://cs4550-final-node-mnagras.herokuapp.com/reviews/user/' + userId),
                fetch('https://cs4550-final-node-mnagras.herokuapp.com/followers/' + userId),
                fetch('https://cs4550-final-node-mnagras.herokuapp.com/followers/following/' + userId)
            ]).then(([res1, res2, res3, res4]) => Promise.all([res1.json(), res2.json(), res3.json(), res4.json()]))
                .then(([data1, data2, data3, data4]) => this.setState({
                user: data1.body,
                reviews : data2,
                followers: data3,
                following: data4
            }));
     }

    setUser = (statusCode) =>
         this.setState({
             user: statusCode.body,
             loggedInUser : false
         })

    updateMessage = (statusCode) => {
         this.setState({message: "Profile Data Updated.."})
    }

    updateUser = (e) => {
       e.preventDefault();

        if (this.state.pwdUpdated && (this.state.user.password !== this.state.user.verifypassword))
        {
          this.setState({message: "Passwords do not match. Please enter again"});
          return;
        }
       fetch("https://cs4550-final-node-mnagras.herokuapp.com/users/" + this.state.user.userId,
        {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(this.state.user)
        })
       .then(response => response.json())
       .then(this.updateMessage)
        }

    changeHandler(e) {
        e.persist();
        let store = this.state;
        store.user[e.target.id] = e.target.value;
        if (e.target.id === "password")
         store.pwdUpdated = true
        this.setState(store);
    }

    render() {
        return (
        <div>
         <HeaderComponent/>
        <div className="container">
                <h1>Profile</h1>
                { this.state.user &&
                <form className="p-3 my-3 border">
                    <div className="form-group row">
                        <label  className="col-sm-2 col-form-label"> First Name </label>
                        <div className="col-sm-10">
                            <input className="form-control" onChange={this.changeHandler}
                                   id="firstName" value = {this.state.user.firstName} >
                            </input>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label  className="col-sm-2 col-form-label"> Last Name </label>
                        <div className="col-sm-10">
                            <input className="form-control" id="lastName" onChange={this.changeHandler}
                            value = {this.state.user.lastName} >
                            </input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label  className="col-sm-2 col-form-label">
                        Role </label>
                        <div className="col-sm-10">
                           <select className="form-control"
                              id="role"
                              value={this.state.user.role}
                              onChange={this.changeHandler}>
                              <option value="0">Choose User Role</option>
                              <option value="Customer">Customer</option>
                              <option value="Admin">Admin</option>
                           </select>
                        </div>
                    </div>

                    { this.state.loggedInUser && <div>

        
                    <div className="form-group row">
                        <label  className="col-sm-2 col-form-label">
                            Email </label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control" id="email"
                                   readOnly value={this.state.user.email}>
                                </input>
                        </div>
                    </div>

                   <div className="form-group row">
                        <label for="password" className="col-sm-2 col-form-label">
                            Password </label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control"
                                   id="password" value = {this.state.user.password}
                                   onChange={this.changeHandler}
                                   ></input>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label for="password" className="col-sm-2 col-form-label">
                            Verify Password </label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control"
                                   id="verifypassword" value = {this.state.user.verifypassword}
                                   onChange={this.changeHandler}
                                   ></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">
                            Date of Birth </label>
                        <div className="col-sm-10">
                            <input type="date" className="form-control"
                                   id="dob"
                                   onChange={this.changeHandler}
                                    value={this.state.user.dob}></input>
                        </div>
                    </div>
                    <div className="form-group row">
                         <label  className="col-sm-2 col-form-label"> Phone Number </label>
                         <div className="col-sm-10">
                             <input type="tel" className="form-control" id="phoneNumber"
                             value = {this.state.user.phoneNumber}
                             onChange={this.changeHandler}>
                             </input>
                         </div>
                     </div>
                    <div className="form-group row ">
                        <button className="btn btn-success ml-5 mr-5" onClick={this.updateUser}>Submit</button>
                        <p> {this.state.message} </p>
                    </div>
                    </div>
                    }



                    <div className="alertFld"></div>
                </form>
                }
                <div class="row">
                <div class="col container p-3 my-3 border bg-warning">
                    Followers
                     <ul className="container">
                        { this.state.followers.map((follow, index) => (
                        <li>
                          <Link className="text-white" to={`/profile/${follow.followerId}`}> {follow.firstName} {follow.lastName} </Link>
                        </li>
                        ))}
                    </ul>
                  </div>

                  <div class="col container p-3 my-3 border bg-danger">
                  Following
                  <ul className="container">
                      { this.state.following.map((follow, index) => (
                      <li>
                        <Link className="text-white" to={`/profile/${follow.userId}`}> {follow.firstName} {follow.lastName} </Link>
                      </li>
                      ))}
                  </ul>
                  </div>
                  <div class="col container p-3 my-3 border bg-success">
                    List of Products
                     <ul className="container">
                        { this.state.reviews.map((review, index) => (
                        <li>
                          <Link className="text-white" to={`/details/${review.productId}`}> {review.productId} </Link> <p> Comment :  {review.comment} </p>

                        </li>
                        ))}
                    </ul>
                  </div>

                </div>
            </div>
        </div>


        )
    }
}

function mapState(state, ownProps) {
    const { authenticationReducer } = state;
    const { user , loggedIn} = authenticationReducer;
    return { user, loggedIn};
}

export default connect(mapState)(ProfileComponent);