import React from "react";
import { Route, Link} from "react-router-dom";
import HeaderComponent from "./HeaderComponent";

export default class ProfileComponent extends React.Component {
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
                        <label for="usernameFld" className="col-sm-2 col-form-label">
                            Username </label>
                        <div className="col-sm-10">
                            <input className="form-control"
                                   id="usernameFld" readonly
                                   placeholder="Alice"></input>
                        </div>
                    </div>
        
                    <div className="form-group row">
                        <label for="phoneFld" className="col-sm-2 col-form-label">
                            Phone Number </label>
                        <div className="col-sm-10">
                            <input type="tel" className="form-control"
                                   id="phoneFld"
                                   placeholder="(555) 123-4324"></input>
                        </div>
                    </div>
        
                    <div className="form-group row">
                        <label for="emailFld" className="col-sm-2 col-form-label">
                            Email </label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control"
                                   id="emailFld"
                                   placeholder="alice@wonderland.com"></input>
                        </div>
                    </div>
        
                    <div className="form-group row">
                        <label for="dobFld" className="col-sm-2 col-form-label">
                            Date of Birth </label>
                        <div className="col-sm-10">
                            <input type="date" className="form-control"
                                   id="dobFld"
                                    placeholder="03/23/1999"></input>
                        </div>
                    </div>
        
                    <div className="form-group row">
                        <label for="role" className="col-sm-2 col-form-label">
                        Role </label>
                        <div className="col-sm-10">
                            <input type="role" className="form-control"
                                   id="role"
                                   placeholder="admin"></input>
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