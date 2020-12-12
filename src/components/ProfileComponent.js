import React from "react";
import { connect } from 'react-redux';
import { Route, Link} from "react-router-dom";
import HeaderComponent from "./HeaderComponent";


class ProfileComponent extends React.Component {
    constructor(props) {
            super(props);
            this.state = {
            user : '',
            loggedInUser : false,
            }

        }

    componentDidMount() {
        const userId = this.props.match.params.userId;
        let bSkip = true;
        if (userId)
            bSkip = false;
        if (this.props.user && this.props.user.userId === parseInt(userId))
          bSkip = true;
        if (!bSkip )
        {

          fetch("http://localhost:9000/users/" + userId)
                     .then(response => response.json())
                    .then(this.setUser);
        }
        else
        {
          if (this.props.user)
          {
            this.setState({
             user: this.props.user,
             loggedInUser : true
             })
            }
        }
     }

    setUser = (statusCode) =>
         this.setState({
             user: statusCode.body,
             loggedInUser : false
         })

    render() {
        return (
        <div>
         <HeaderComponent/>
        <br/>
        <br/>
        <br/>

        <div className="container">
                <h1>Profile</h1>
                { this.state.user &&
                <form>
                    <div className="form-group row">
                        <label  className="col-sm-2 col-form-label"> First Name </label>
                        <div className="col-sm-10">
                            <input className="form-control"
                                   id="firstName" readonly value = {this.state.user.firstName} >
                            </input>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label for="phoneFld" className="col-sm-2 col-form-label"> Last Name </label>
                        <div className="col-sm-10">
                            <input className="form-control" id="lastname"
                            value = {this.state.user.lastName} >
                            </input>
                        </div>
                    </div>
                    { this.state.loggedInUser && <div>
                    <div className="form-group row">
                        <label for="phoneFld" className="col-sm-2 col-form-label"> Phone Number </label>
                        <div className="col-sm-10">
                            <input type="tel" className="form-control" id="phoneFld"
                            value = {this.state.user.phoneNumber} >
                            </input>
                        </div>
                    </div>
        
                    <div className="form-group row">
                        <label for="emailFld" className="col-sm-2 col-form-label">
                            Email </label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control" id="emailFld"
                                   value={this.state.user.email}>
                                </input>
                        </div>
                    </div>
        
                    <div className="form-group row">
                        <label for="dobFld" className="col-sm-2 col-form-label">
                            Date of Birth </label>
                        <div className="col-sm-10">
                            <input type="date" className="form-control"
                                   id="dobFld"
                                    value={this.state.user.dob}></input>
                        </div>
                    </div>
                    <button className="btn btn-sm btn-success" onClick={this.updateUser}>Submit</button>
                    </div> }
                    <div className="form-group row">
                        <label for="role" className="col-sm-2 col-form-label">
                        Role </label>
                        <div className="col-sm-10">
                            <input type="role" className="form-control"
                                   id="role"
                                   placeholder={this.state.user.role}></input>
                        </div>
                    </div>


                    <div className="alertFld"></div>
                </form>
                }
                <div className="row">
                <div className="col-3">
                    <h3>Favorites</h3>
                </div>
                <div className="col-20">
                    <h3>Followers</h3>
                </div>
                </div>
            </div>
        </div>


        )
    }
}

function mapState(state, ownProps) {
    const { authenticationReducer } = state;
    const { user } = authenticationReducer;
 //   const {userId} = ownProps.params.userId;
    return { user };
}

export default connect(mapState)(ProfileComponent);