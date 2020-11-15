import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from '../src/components/Footer/footer.js';
import Login from '../src/components/LogIn/LogIn.js'
import SignUp from '../src/components/Signup/signUp.js';
import Home from '../src/components/Home/home.js';
import Header from '../src/components/Header/header.js'
class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <Header />
                    <Route path="/" exact component={() => <Home />} />
                    <Route path="/login" exact component={() => <Login />} />
                    <Route path="/signup" exact component={() => <SignUp />} />
                    <Footer />
                </Router>
                <Footer />
            </div>
        );
    }
}


export default App;