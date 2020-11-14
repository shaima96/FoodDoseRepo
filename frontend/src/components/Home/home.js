import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogIn from '../LogIn/LogIn.js'
import axios from 'axios'
const Home = ({ history }) => {
    return (<div><h3>FoodDose</h3>
        <button onClick={() => {
            history.push("/LogIn")
        }}>Login</button>
    </div>
    )
}
// class Home extends Component {
//     constructor() {
//         super();

//     }


//     render() {
//         return (
//             <div className='container'>
//               <div className="hreader">
//                 <h3>FoodDose</h3>
//                 <button onClick={()=>{
//                     history.push("/login")
//                 }}>Login</button>
//               </div>

//             </div>
//         );
//     }
// }


export default Home;