import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Login from '../src/components/LogIn/LogIn.js'
import SignUp from '../src/components/Signup/signUp.js';
import Home from '../src/components/Home/home.js';
import Footer from '../src/components/Footer/footer.js';

class App extends Component {
    // constructor() {
    //     super();

    render() {
        return (
            // <Router>
            //     <App>
            //         {/* <Route path="/" exact component={Home} /> */}
            //         <Route path="/login" component={Login} />
            //     </App>
            // </Router>
            <div className="App">
                <Router>
                    <Route path="/" exact component={() => <Home />} />
                    {/* <Redirect to="/login" /> */}
                    <Route path="/login" exact component={() => <Login />} />
                    <Route path="/signup" exact component={() => <SignUp />} />
                     <Footer />
                </Router>
            </div>
        );
    }
}


export default App;