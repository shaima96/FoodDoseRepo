import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './healthyresturant.css'
import Header2 from '../Header2/header2';
import Logout from '../logout/logout';
function Healthyresturant() {
    return (
        <div class='container'>
            <Header2 />
            <Logout />
            <table class='health' align="center">
                <tr>
                    <td onClick={() => { window.location.href = '/fastfoodres/royal/5fb4cc6hjfgjhg45261659' }}><img src={"https://scontent.fjrs4-1.fna.fbcdn.net/v/t1.0-0/p206x206/80812782_1018300865184215_2238701301598781440_o.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_ohc=c-OIK0PxBKoAX9dAG72&_nc_ht=scontent.fjrs4-1.fna&tp=6&oh=99765885c0db6057cbcb2b91386ad1c2&oe=5FDA662A"} alt="img" class="imag" /></td>
                    <td onClick={() => { window.location.href = 'fastfoodres/royal/5fb4jkhjfghkjn25645648' }}><img src={"https://scontent.fjrs4-1.fna.fbcdn.net/v/t1.0-9/54256383_155084675439254_7388346404940283904_n.jpg?_nc_cat=103&ccb=2&_nc_sid=85a577&_nc_ohc=g9oZsddPHKgAX86w1Gk&_nc_ht=scontent.fjrs4-1.fna&oh=2aa1c31a2d40a41f8426565e3479127a&oe=5FDD132B"} alt="img" class="imag" /></td>
                </tr>
                <tr>
                    <th class="text-center" onClick={() => { window.location.href = '/fastfoodres/royal/5fb4cc6hjfgjhg45261659' }}>Zuwar</th>
                    <th class="text-center" onClick={() => { window.location.href = 'fastfoodres/royal/5fb4jkhjfghkjn25645648' }}>Kcal Calories</th>
                </tr>
                <tr></tr>
                <tr>
                    <td onClick={() => { window.location.href = '/fastfoodres/royal/5ffdhjvhk1151265659879' }}><img src={"https://scontent.fjrs4-1.fna.fbcdn.net/v/t1.0-0/p206x206/77428053_1903085716491283_8852297398035152896_o.jpg?_nc_cat=101&ccb=2&_nc_sid=09cbfe&_nc_ohc=JZ6TI5qJn3cAX9Ahz2M&_nc_ht=scontent.fjrs4-1.fna&tp=6&oh=f4c0f7f8778d0098a3605d3b88f404d9&oe=5FDA58BB"} alt="img" class="imag" /></td>
                    <td onClick={() => { window.location.href = '/fastfoodres/royal/5frmweflm,145236878778' }}><img src={"https://scontent.fjrs4-1.fna.fbcdn.net/v/t1.0-0/p206x206/18268430_689348107933048_7438000805401766736_n.jpg?_nc_cat=100&ccb=2&_nc_sid=174925&_nc_ohc=Pu3PDBlawHcAX-065Cp&_nc_ht=scontent.fjrs4-1.fna&tp=6&oh=17e097a6f1954699babddadfa9c0edc2&oe=5FDCD2DA"} alt="img" class="imag"
                    /></td>
                </tr>
                <tr>
                    <th class="text-center" onClick={() => { window.location.href = '/fastfoodres/royal/5ffdhjvhk1151265659879' }}>Bait al yasameen</th>
                    <th class="text-center" onClick={() => { window.location.href = '/fastfoodres/royal/5frmweflm,145236878778' }}>Sofraji</th>
                </tr>
            </table>

        </div>
    );
}


export default Healthyresturant;