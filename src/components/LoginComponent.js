import React from "react";
import { Route, Link} from "react-router-dom";
import HeaderComponent from "./HeaderComponent";
import { connect } from 'react-redux';
import { userActions } from '../actions/userActions';


 class LoginComponent extends React.Component {
    constructor(props) {
        super(props);

         // reset login status
         this.props.logout();

        this.state = {
                  user: {
                    email: '',
                    password: '',

                  },
                  message: ''
                };
                this.changeHandler = this.changeHandler.bind(this);
                this.loginUser = this.loginUser.bind(this);
    }

     changeHandler(e) {
            e.persist();
            let store = this.state;
            store.user[e.target.id] = e.target.value;
            this.setState(store);
        }

        setLogin = (statusCode) => {
            if (statusCode.body.includes('Login is successful')) {
                this.props.history.push("/home");
            }
            else {
                this.setState({message: statusCode.body})
            }}


        loginUser(e) {
           e.preventDefault();
           if (this.state.user.email && this.state.user.password) {
            this.props.login(this.state.user);
           }
           else {
            this.setState({message: "Enter email and password"})
           }
        }


    render() {
        const { loggingIn } = this.props;

        return (
            <div className="container">
                <br/>
                <h1>
                    Sign In
                </h1>

                <form>
                    <div className="form-group row">
                        <label for="email" className="col-sm-2 col-form-label">
                            Email </label>
                        <div className="col-sm-10">
                            <input className="form-control"
                                   id="email"
                                   onChange={this.changeHandler}
                                   placeholder="alice@gmail.com"></input>
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
                        <label className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-10">
                        <label className="col-sm-10 col-form-label">{this.props.errorMessage}</label>
                            <button
                            className="btn btn-primary btn-block" onClick={this.loginUser}> Sign in
                            </button>
                            <div className="row">
                                <div className="col-6">
                                    <Link to={`/home`} className="float-left">
                                    Cancel
                                    </Link>
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

        )
    }

}

function mapState(state) {
    const { loggingIn, errorMessage } = state.authenticationReducer;
    return { loggingIn, errorMessage };
}

const actionCreators = {
    login: userActions.login,
    logout: userActions.logout
};

export default connect(mapState, actionCreators)(LoginComponent)
