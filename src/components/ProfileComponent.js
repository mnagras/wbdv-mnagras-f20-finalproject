import React from "react";
import { Route, Link} from "react-router-dom";
import HeaderComponent from "./HeaderComponent";
import { connect } from 'react-redux';

class ProfileComponent extends React.Component {
    constructor(props) {
        super(props)
    }



    render() {
        return (
        <div>
         <HeaderComponent/>
        <br/>
        <br/>
        <br/>

        <div className="container">
                <h1>Profile</h1>
                <form>
                    <div className="form-group row">
                        <label  className="col-sm-2 col-form-label"> First Name </label>
                        <div className="col-sm-10">
                            <input className="form-control"
                                   id="firstName" readonly value = {this.props.user.firstName} >
                            </input>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label for="phoneFld" className="col-sm-2 col-form-label"> Last Name </label>
                        <div className="col-sm-10">
                            <input className="form-control" id="lastname"
                            value = {this.props.user.lastName} >
                            </input>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label for="phoneFld" className="col-sm-2 col-form-label"> Phone Number </label>
                        <div className="col-sm-10">
                            <input type="tel" className="form-control" id="phoneFld"
                            value = {this.props.user.phoneNumber} >
                            </input>
                        </div>
                    </div>
        
                    <div className="form-group row">
                        <label for="emailFld" className="col-sm-2 col-form-label">
                            Email </label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control" id="emailFld"
                                   value={this.props.user.email}>
                                </input>
                        </div>
                    </div>
        
                    <div className="form-group row">
                        <label for="dobFld" className="col-sm-2 col-form-label">
                            Date of Birth </label>
                        <div className="col-sm-10">
                            <input type="date" className="form-control"
                                   id="dobFld"
                                    value={this.props.user.dob}></input>
                        </div>
                    </div>
        
                    <div className="form-group row">
                        <label for="role" className="col-sm-2 col-form-label">
                        Role </label>
                        <div className="col-sm-10">
                            <input type="role" className="form-control"
                                   id="role"
                                   placeholder={this.props.user.role}></input>
                        </div>
                    </div>


                    <div className="alertFld"></div>
                </form>
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

function mapState(state) {
    const { authenticationReducer } = state;
    const { user } = authenticationReducer;
    return { user };
}

export default connect(mapState)(ProfileComponent);