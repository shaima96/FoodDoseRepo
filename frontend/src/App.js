import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Login from '../src/components/LogIn/LogIn.js'
import SignUp from '../src/components/Signup/signUp.js';
import Home from '../src/components/Home/home.js';
import Footer from '../src/components/Footer/footer.js';
import Header from '../src/components/Header/header.js'
class App extends Component {
    render() {
        return (
            <div className="App">
                <div className='header'>
                    <Header />
                </div>
                 <div>
                <Router>
                    <Route path="/" exact component={() => <Home />} />
                    <Route path="/login" exact component={() => <Login />} />
                    <Route path="/signup" exact component={() => <SignUp />} />
                    <Route path="/signup" exact component={() => <SignUp />} />
                </Router>
                </div>
                <div className="footer">
                    <Footer />
                </div>
            </div>
        );
    }
}


export default App;