import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import fastfood from "./fastfood.png"
import healthyfood from "./healthyfood.png"
import bakries from "./bakries.png"
import barbecue from "./barbecue.png"
import desert from "./desert.png"
import drinks from "./drinks.png"
import pasta from "./pasta.png"
import salad from "./salad.png"
import seafood from "./seafood.png"
import traditional from "./traditional.png"
import './home.css'
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const Login = styled(Button)({
    background: '#F69624',
    border: 0,
    borderRadius: 30,
    color: 'white',
    height: 48,
    padding: '0 30px',
});
function Home() {
    let history = useHistory();
    return (
        <div class='container'>
            <AppBar position="static" class='appbar'>
                <Toolbar>
                    <Typography variant="h6" id="fooddose">
                        FoodDose
                    </Typography>
                    <Login onClick={() => {
                        history.push('/login')
                    }} id="login">LogIn</Login>
                </Toolbar>
            </AppBar>
            <table align="center">
                <tr>
                    <td><img src={fastfood} alt="img" class="img" /></td>
                    <td><img src={healthyfood} alt="img" class="img" /></td>
                    <td><img src={barbecue} alt="img" class="img" /></td>
                    <td><img src={salad} alt="img" class="img" /></td>
                    <td><img src={drinks} alt="img" class="img" /></td>
                </tr>
                <tr>
                    <th class="text-center">Fast Food</th>
                    <th class="text-center">Healthy Food</th>
                    <th class="text-center">Barbecue</th>
                    <th class="text-center">Salad</th>
                    <th class="text-center">Drinks</th>
                </tr>
                <tr></tr>
                <tr>
                    <td><img src={bakries} alt="img" class="img" /></td>
                    <td><img src={traditional} alt="img" class="img" /></td>
                    <td><img src={pasta} alt="img" class="img" /></td>
                    <td><img src={desert} alt="img" class="img" /></td>
                    <td><img src={seafood} alt="img" class="img" /></td>
                </tr>
                <tr>
                    <th class="text-center">Bakeries</th>
                    <th class="text-center">Traditional Food</th>
                    <th class="text-center">Pasta</th>
                    <th class="text-center">Dessert</th>
                    <th class="text-center">Sea Food </th>
                </tr>
            </table>
        </div>
    );
}


export default Home;