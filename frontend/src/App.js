import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from '../src/components/Footer/footer.js';
import Login from '../src/components/LogIn/LogIn.js'
import SignUp from '../src/components/Signup/signUp.js';
import Home from '../src/components/Home/home.js';
import Header from '../src/components/Header/header.js';
import Fastresturant from '../src/components/Fastresturant/fastresturant.js'
import Royal from '../src/components/Royal/royal.js'
import Healthyresturant from '../src/components/Healthyresturant/healthyresturant.js'
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
                        <Route path="/fastfoodres" exact component={() => <Fastresturant />} />
                        <Route path='/fastfoodres/royal/5fb4cc6bed78552714cfb3af' exact component={() => <Royal />} />
                        <Route path='/healthyresturant' exact component={() => <Healthyresturant />} />
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