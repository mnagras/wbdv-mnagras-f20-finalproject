import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import {combineReducers, createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import authenticationReducer from "./reducers/authentication.reducer";
import userReducer from "./reducers/user.reducer";
import thunkMiddleware from 'redux-thunk';


const rootReducer = combineReducers({
    authenticationReducer,
    userReducer
})

const store = createStore(rootReducer,
applyMiddleware(
        thunkMiddleware
    ))


ReactDOM.render(
  <Provider store={store}>
        <App/>
    </Provider>,



  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
