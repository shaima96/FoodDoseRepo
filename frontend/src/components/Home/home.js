import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Login from '../src/components/LogIn/LogIn.js'
// import axios from 'axios'
// import { browserHistory } from "react-router";
import { useHistory } from "react-router-dom";


// const Home = ({ history }) => {

//     return (
//     <div>
//         <h3>FoodDose</h3>
//         <button onClick={() => {
//             browserHistory.push("/login")
//         }}>Login</button>
//     </div>
//     )

// }
function Home() {
    // home = () => {
    //     browserHistory.push("/Login");
    //       };

    let history = useHistory();
    return (
        <div className='container'>
            <div className="header">
                <h3>FoodDose</h3>
                <button onClick={() => {
                    history.push('/login')
                }}>Login</button>
            </div>
        </div>
    );
}


export default Home;