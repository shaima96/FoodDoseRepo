import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import alrayan from "./alrayan.png"
import chilliHouse from "./chiliHouse.png"
import dayia from "./dayia.png"
import dollar from "./dollar.png"
import kfc from "./kfc.png"
import Mrbaker from "./Mrbaker.png"
import royal from "./royal.png"
import segafredo from "./segafredo.png"
import uburger from "./uburger.png"
import yummy from "./yummy.png"
import './fastresturant.css'
// import axios from 'axios';

// const id = "5fb2d85dd2cff337240f4f6e";

// class Fastresturant extends Component {
//     // constaractor(state) {

    //     state = {
    //         resturants: []
    //     };
    // }

    // componentDidMount() {
    //     axios.get('/restCategoryById/' + id)
    //         .then(fastfoodres => console.log(fastfoodres.data))
    //         .catch(e => console.log(e))
    // }
//     render() {
//         // const fastfoodres = this.state.resturants.map(resturant1 => (
//         //     <div key={resturant1._id}>
//         //         <h1>{resturant1.Name}</h1>
//         //         <p>{resturant1.Image}</p>
//         //     </div>
//         // ));
//         return (
//             <div className="fast">
//                 {fastfoodres}
//             </div>
//         );
//     }
// }

function Fastresturant() {
    return (
<div class='container'>

    <table align="center">
        <tr>
            <td><img src={kfc} alt="img" class="imag" /></td>
            <td><img src={alrayan} alt="img" class="imag" /></td>
            <td><img src={dollar} alt="img" class="imag" /></td>
            <td><img src={dayia} alt="img" class="imag" /></td>
            <td><img src={chilliHouse} alt="img" class="imag" /></td>
        </tr>
        <tr>
            <th class="text-center">KFC</th>
            <th class="text-center">Shawerma Al-Rayan</th>
            <th class="text-center">Dollar resturant</th>
            <th class="text-center">Al-Daiaa</th>
            <th class="text-center">Chilli House</th>
        </tr>
        <tr></tr>
        <tr>
            <td><img src={Mrbaker} alt="img" class="imag" /></td>
            <td><img src={yummy} alt="img" class="imag" /></td>
            <td><img src={segafredo} alt="img" class="imag" /></td>
            <td><img src={royal} alt="img" class="imag" onClick={() => {
                window.location.href = '/fastfoodres/royal/5fb4cc6bed78552714cfb3af'
            }} /></td>
            <td><img src={uburger} alt="img" class="imag" /></td>
        </tr>
        <tr>
            <th class="text-center">Mr.Baker</th>
            <th class="text-center">Yummy</th>
            <th class="text-center">Segafredo</th>
            <th class="text-center" onClick={() => { window.location.href = '/fastfoodres/royal/5fb4cc6bed78552714cfb3af' }}>Royal resturant</th>
            <th class="text-center">U Burger</th>
        </tr>
    </table>

        </div>
    );
}


export default Fastresturant;