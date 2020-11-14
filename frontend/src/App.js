import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from '../src/components/LogIn/LogIn.js'
import SignUp from '../src/components/Signup/signUp.js';
import Home from '../src/components/Home/home.js'


class App extends Component {
    constructor() {
        super();

    }

    render() {
        return (
            <Router>
                <App>
                    <Route path="/" exact component={Home} />
                    <Route path="/login" component={Login} />
                </App>
            </Router>
        );
    }
}


export default App;