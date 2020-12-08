import React from "react";
import { Route, Link} from "react-router-dom";
import HeaderComponent from "./HeaderComponent";

export default class LoginComponent extends React.Component {
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
                        <h1>
                            Sign In
                        </h1>
            
                        <form>
                            <div className="form-group row">
                                <label for="username" className="col-sm-2 col-form-label">
                                    Username </label>
                                <div className="col-sm-10">
                                    <input className="form-control"
                                           id="username"
                                           placeholder="Alice"></input>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label for="password" className="col-sm-2 col-form-label">
                                    Password </label>
                                <div className="col-sm-10">
                                    <input type="password" className="form-control"
                                           id="password" placeholder="123qwe#$%"></input>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label"></label>
                                <div className="col-sm-10">
                                    <a href="../"
                                    className="btn btn-primary btn-block"> Sign in
                                    </a>
                                    <div className="row">
                                        <div className="col-6">
                                            <a href="#">Forgot Password?</a>
                                        </div>
                                        <div className="col-6">
                                            <Link to={`/register`} className="float-right">
                                            Sign up
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                 </div>

        )
    }

}