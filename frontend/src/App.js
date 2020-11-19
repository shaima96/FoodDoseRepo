import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from '../src/components/Footer/footer.js';
import Login from '../src/components/LogIn/LogIn.js'
import SignUp from '../src/components/Signup/signUp.js';
import Home from '../src/components/Home/home.js';
import Fastresturant from '../src/components/Fastresturant/fastresturant.js'
import Royal from '../src/components/Royal/royal.js'
import Welcome from '../src/components/Welcome/welcome.js'
import Logout from '../src/components/logout/logout.js'
class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App" >
                <div>
                    <Router>
                        <Route path="/" exact component={() => <Welcome />} />
                        <Route path="/home" exact component={() => <Home />} />
                        <Route path="/login" exact component={() => <Login />} />
                        <Route path="/signup" exact component={() => <SignUp />} />
                        <Route path="/logout" exact component={() => <Logout/>} />
                        <Route path="/fastfoodres" exact component={() => <Fastresturant />} />
                        <Route path='/fastfoodres/royal' exact component={() => <Royal />} />
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