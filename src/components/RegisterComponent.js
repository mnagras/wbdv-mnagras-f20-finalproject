import React from "react";
import HeaderComponent from "./HeaderComponent";

export default class RegisterComponent extends React.Component {
 constructor(props) {
        super(props)
    }

    registerUser = () => {
    var newUser = {

    }
    fetch("http://localhost:9000/users",
        {
            method: "POST",
            body: JSON.stringify({
                ...newUser
            }),
            headers: {
                "content-type": "application/json"
            }
        })
        .then(response => response.json())
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
                    Register
                </h1>
        
                <form>
                    <div className="form-group row">
                        <label for="email" className="col-sm-2 col-form-label">
                            Email </label>
                        <div className="col-sm-10">
                                <input className="form-control"
                                       id="email"
                                       placeholder="alice@hotmail.com"></input>
                        </div>
                    </div>
        
                    <div className="form-group row">
                        <label for="password" className="col-sm-2 col-form-label">
                            Password </label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control"
                                   id="password"
                                   placeholder="123qwe#$%"></input>
                        </div>
                    </div>
        
                    <div className="form-group row">
                        <label for="password" className="col-sm-2 col-form-label">
                            Verify Password </label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control"
                                   id="verifypassword"
                                   placeholder="123qwe#$%"></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="roleFld" className="col-sm-2 col-form-label">
                            Role </label>
                        <div className="col-sm-10">
                            <select className="form-control"
                                   id="roleFld" >
                                <option value="Customer">Customer</option>
                                <option value="Admin">Admin</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-10">
                            <button className="btn btn-primary btn-block" onClick={this.registerUser}
                            > Sign Up
                            </button>

        
                        <div className="row">
                            <div className="col-6">
                                <a href="../">Cancel</a>
                            </div>
                            <div className="col-6">
                                <a href="../login"
                                   className="float-right">
                                    Login</a>
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