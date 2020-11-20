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
import KFC from '../src/components/KFC/kfc.js'
import Rayan from '../src/components/AL-Rayan/rayan.js'
import Dolar from '../src/components/Dolar/dolar.js'
import Daiah from '../src/components/Daiah/daiah.js'
import Ch from '../src/components/ChilieHouse/ch.js'
import Yummy from "../src/components/Yummy/yummy.js"
import Sego from "../src/components/SegoFredo/sego.js"
import Dose from "../src/components/DoseBurger/dose.js"

import Healthyresturant from '../src/components/Healthyresturant/healthyresturant.js'
import Barbecuerest from '../src/components/Barbecuerest/barbecuerest.js';
import Saladrest from '../src/components/Saladrest/saladrest.js';
import Drinkrest from '../src/components/Drinkrest/drinkrest.js';
import Bakeriesrest from '../src/components/Bakeriesrest/bakeriesrest.js';
import Traditionalrest from '../src/components/Traditionalrest/traditionalrest.js';
import Pastarest from '../src/components/Pastarest/pastarest.js';
import Dessertrest from '../src/components/Dessertrest/dessertrest.js';
import Seafoodrest from '../src/components/Seafoodrest/seafoodrest.js';
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
                        <Route path='/fastfoodres/royal/5fb4cc6bed78552714cfb3af' exact component={() => <Royal />} />
                        <Route path='/fastfoodres/royal/5fb4cc6bed785524445dfksu' exact component={() => <KFC />} />
                        <Route path='/fastfoodres/royal/5fb4cc6bed78555451dsihao' exact component={() => <Rayan />} />
                        <Route path='/fastfoodres/royal/5fb4cc6bek56464545dskdk' exact component={() => <Dolar />} />
                        <Route path='/fastfoodres/royal/5fb4cc6bek56887454hihdi' exact component={() => <Daiah />} />
                        <Route path='/fastfoodres/royal/5fb4cc6bek54764575ojisk' exact component={() => <Ch />} />
                        <Route path='/fastfoodres/royal/5fb4cc6bek58649565djfhs' exact component={() => <Yummy />} />
                        <Route path='/fastfoodres/royal/5fb4cc6bej57569952fxrtv' exact component={() => <Sego />} />
                        <Route path='/fastfoodres/royal/5fb4cc6bek5741578sdfffg' exact component={() => <Dose />} />
                        <Route path='/healthyresturant' exact component={() => <Healthyresturant />} />
                        <Route path='/barbecuerest' exact component={() => <Barbecuerest />} />
                        <Route path='/saladrest' exact component={() => <Saladrest />} />
                        <Route path='/drinkrest' exact component={() => <Drinkrest />} />
                        <Route path='/bakeriesrest' exact component={() => <Bakeriesrest />} />
                        <Route path='/traditionalrest' exact component={() => <Traditionalrest />} />
                        <Route path='/pastarest' exact component={() => <Pastarest />} />
                        <Route path='/dessertrest' exact component={() => <Dessertrest />} />
                        <Route path='/seafoodrest' exact component={() => <Seafoodrest />} />
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