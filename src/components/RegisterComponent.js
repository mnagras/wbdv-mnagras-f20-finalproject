import React from "react";
import HeaderComponent from "./HeaderComponent";
import { Redirect, Link, useHistory} from "react-router-dom";

export default class RegisterComponent extends React.Component {
 constructor(props) {
        super(props);
        this.state = {
          user: {
            email: '',
            firstName: '',
            lastName: '',
            password: '',
            role: '',
          },
          message: ''
        };
        this.changeHandler = this.changeHandler.bind(this);
    }


    changeHandler(e) {
        e.persist();
        let store = this.state;
        store.user[e.target.id] = e.target.value;
        this.setState(store);
    }

    setRegister = (statusCode) => {
        if (statusCode.body.includes('User has been registered')) {
            this.props.history.push("/login");
        }
        else {
            this.setState({message: statusCode.body})
        }}

    registerUser = (e) => {
       e.preventDefault();
       fetch("http://localhost:9000/users",
        {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(this.state.user)
        })
       .then(response => response.json())
       .then(this.setRegister)
        }



    render() {
        return (

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

                                       onChange={this.changeHandler}
                                       placeholder="alice@hotmail.com"></input>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label for="firstName" className="col-sm-2 col-form-label">
                            First Name </label>
                        <div className="col-sm-10">
                                <input className="form-control"
                                       id="firstName"

                                       onChange={this.changeHandler}
                                       placeholder="alice"></input>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label for="lastName" className="col-sm-2 col-form-label">
                            Last Name </label>
                        <div className="col-sm-10">
                                <input className="form-control"
                                       id="lastName"

                                       onChange={this.changeHandler}
                                       placeholder="prince"></input>
                        </div>
                    </div>
        
                    <div className="form-group row">
                        <label for="password" className="col-sm-2 col-form-label">
                            Password </label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control"
                                   id="password"

                                   onChange={this.changeHandler}
                                   placeholder="123qwe#$%"></input>
                        </div>
                    </div>
        
                    <div className="form-group row">
                        <label for="password" className="col-sm-2 col-form-label">
                            Verify Password </label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control"
                                   id="verifypassword"

                                   onChange={this.changeHandler}
                                   placeholder="123qwe#$%"></input>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label for="roleFld" className="col-sm-2 col-form-label">
                            Role </label>
                        <div className="col-sm-10">
                            <select className="form-control"
                                   id="role"

                                   onChange={this.changeHandler}>
                                <option value="Customer">Customer</option>
                                <option value="Admin">Admin</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-10">
                        <label className="col-sm-10 col-form-label">{this.state.message}</label>
                            <button className="btn btn-primary btn-block" onClick={this.registerUser}
                            > Sign Up
                            </button>

                    </div>
                    </div>
        
                </form>

            </div>


        )
    }
}