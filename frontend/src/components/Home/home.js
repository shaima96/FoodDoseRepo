import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css'

function Home() {
    return (
        <div class='container'>
            <table align="center">
                <tr>
                    <td><img src={"https://www.neededforhealth.com/wp-content/uploads/2020/02/fastfood.jpg"} alt="img" class="img" onClick={() => {
                        window.location.href = '/fastfoodres'
                    }} /></td>

                    <td><img src={"https://i.pinimg.com/564x/94/7e/a3/947ea396ab646e8b2a3dd86cb0f70635.jpg"} alt="img" class="img" onClick={() => {
                        window.location.href = '/healthyresturant'
                    }} /></td>

                    <td><img src={"https://i.pinimg.com/564x/4f/0e/c2/4f0ec20a75560e2426265f695cda7937.jpg"} alt="img" class="img" onClick={() => {
                        window.location.href = '/barbecuerest'
                    }} /></td>

                    <td><img src={"https://i.pinimg.com/564x/50/7b/62/507b6235728329efb7f1cbb7a4930e90.jpg"} alt="img" class="img" onClick={() => {
                        window.location.href = '/saladrest'
                    }} /></td>

                    <td><img src={"https://i.pinimg.com/564x/43/49/96/434996df2b32803da3920a3a8345434c.jpg"} alt="img" class="img" onClick={() => {
                        window.location.href = '/drinkrest'
                    }} /></td>
                </tr>
                <tr>
                    <th class="text-center" onClick={() => { window.location.href = '/fastfoodres' }}>Fast Food</th>
                    <th class="text-center" onClick={() => { window.location.href = '/healthyresturant' }}>Healthy Food</th>
                    <th class="text-center" onClick={() => { window.location.href = '/barbecuerest' }}>Barbecue</th>
                    <th class="text-center" onClick={() => { window.location.href = '/saladrest' }}>Salad</th>
                    <th class="text-center" onClick={() => { window.location.href = '/drinkrest' }}>Drinks</th>
                </tr>
                <tr></tr>
                <tr>
                    <td><img src={"https://i.pinimg.com/564x/4a/b6/4b/4ab64b6485a468a82b701172a8aead42.jpg"} alt="img" class="img" onClick={() => {
                        window.location.href = '/bakeriesrest'
                    }} /></td>

                    <td><img src={"https://i.pinimg.com/564x/df/60/12/df6012bfda6763b45e6ebd8ab7781e49.jpg"} alt="img" class="img" onClick={() => {
                        window.location.href = '/traditionalrest'
                    }} /></td>

                    <td><img src={"https://i.pinimg.com/564x/c9/19/af/c919af58ef34f4d83eda7fa49e9a02dc.jpg"} alt="img" class="img" onClick={() => {
                        window.location.href = '/pastarest'
                    }} /></td>

                    <td><img src={"https://i.pinimg.com/564x/01/c4/8d/01c48d4b45449aa3aa4d357681238640.jpg"} alt="img" class="img" onClick={() => {
                        window.location.href = '/dessertrest'
                    }} /></td>

                    <td><img src={"https://i.pinimg.com/564x/ce/a6/37/cea6373348f019f1b4f8a2f047d70f6e.jpg"} alt="img" class="img" onClick={() => {
                        window.location.href = '/seafoodrest'
                    }} /></td>
                </tr>
                <tr>
                    <th class="text-center" onClick={() => { window.location.href = '/bakeriesrest' }}>Bakeries</th>
                    <th class="text-center" onClick={() => { window.location.href = '/traditionalrest' }}>Traditional Food</th>
                    <th class="text-center" onClick={() => { window.location.href = '/pastarest' }}>Pasta</th>
                    <th class="text-center" onClick={() => { window.location.href = '/dessertrest' }}>Dessert</th>
                    <th class="text-center" onClick={() => { window.location.href = '/seafoodrest' }}>Sea Food </th>
                </tr>
            </table>

        </div>
    );
}


export default Home;