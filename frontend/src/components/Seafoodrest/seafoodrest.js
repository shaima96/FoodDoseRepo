import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './seafoodrest.css'
import Header2 from '../Header2/header2';
import Logout from '../logout/logout';
function Seafoodrest() {
    return (
        <div class='container'>
            <Header2 />
            <Logout />
            <table class='sea' align="center">
                <tr>
                    <td><img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzuGhh4VJuJCQDFdJavcTrHHpwmGGcfcFhUw&usqp=CAU"} alt="img" class="imag" /></td>
                    <td onClick={() => { window.location.href = '/fastfoodres/royal/5frmweflm,145236878778' }}><img src={"https://scontent.fjrs4-1.fna.fbcdn.net/v/t1.0-0/p206x206/18268430_689348107933048_7438000805401766736_n.jpg?_nc_cat=100&ccb=2&_nc_sid=174925&_nc_ohc=Pu3PDBlawHcAX-065Cp&_nc_ht=scontent.fjrs4-1.fna&tp=6&oh=17e097a6f1954699babddadfa9c0edc2&oe=5FDCD2DA"} alt="img" class="imag" /></td>
                    <td><img src={"https://scontent.fjrs4-1.fna.fbcdn.net/v/t31.0-0/p206x206/27023891_561616187525112_5927665775725300479_o.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_ohc=1WoO5Zyt4OEAX-kDovw&_nc_oc=AQnfUVGhU4SUa2rmrnH88p6q9tAKeUJEzikNR_zXyv93YrUIhN5fy4xdB8suYgAdjmY&_nc_ht=scontent.fjrs4-1.fna&tp=6&oh=21eb26a393231a561ecc0d5ab157ec83&oe=5FDA4C8E"} alt="img" class="imag" /></td>
                    <td><img src={"https://scontent.fjrs4-1.fna.fbcdn.net/v/t1.0-9/18056668_1990700477824955_1993151768198390293_n.jpg?_nc_cat=105&ccb=2&_nc_sid=85a577&_nc_ohc=L5kHBQOPNhoAX83t1l-&_nc_ht=scontent.fjrs4-1.fna&oh=e1d2a601cfc6a1c15e94a7d9f3b259fb&oe=5FDB856E"} alt="img" class="imag" /></td>
                    <td onClick={() => { window.location.href = '/fastfoodres/royal/5ffdhjvhk1151265659879' }}><img src={"https://scontent.fjrs4-1.fna.fbcdn.net/v/t1.0-0/p206x206/77428053_1903085716491283_8852297398035152896_o.jpg?_nc_cat=101&ccb=2&_nc_sid=09cbfe&_nc_ohc=JZ6TI5qJn3cAX9Ahz2M&_nc_ht=scontent.fjrs4-1.fna&tp=6&oh=f4c0f7f8778d0098a3605d3b88f404d9&oe=5FDA58BB"} alt="img" class="imag" /></td>
                </tr>
                <tr>
                    <th class="text-center">Kalimari</th>
                    <th class="text-center" onClick={() => { window.location.href = '/fastfoodres/royal/5frmweflm,145236878778' }}>Sofraji</th>
                    <th class="text-center">Safienat al sayad</th>
                    <th class="text-center">Hikayat Bahar</th>
                    <th class="text-center" onClick={() => { window.location.href = '/fastfoodres/royal/5ffdhjvhk1151265659879' }}>Bait al yasameen</th>
                </tr>
                <tr></tr>
                {/* <tr>
                    <td><img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrB2KUoAy3MZq7t4TRoDyqnnvDW0ml9rSuDw&usqp=CAU"} alt="img" class="imag" /></td>
                    <td><img src={"https://scontent.fjrs4-1.fna.fbcdn.net/v/t1.0-0/p206x206/25552209_919124751570755_1427506206719772204_n.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_ohc=GUpL5JZAXIcAX97krVp&_nc_ht=scontent.fjrs4-1.fna&tp=6&oh=1f78ce772090697d49d284fac2175460&oe=5FDC1D12"} alt="img" class="imag" /></td>
                    <td><img src={"https://scontent.fjrs4-1.fna.fbcdn.net/v/t1.0-0/p206x206/52930354_391217931442632_8737179471204843520_o.jpg?_nc_cat=106&ccb=2&_nc_sid=174925&_nc_ohc=w3jc8ENFjEIAX-nbwOU&_nc_ht=scontent.fjrs4-1.fna&tp=6&oh=ea26ecb56b9cae3c3c6fa692de6f8ed2&oe=5FDB639C"} alt="img" class="imag" /></td>
                    <td><img src={"https://scontent.fjrs4-1.fna.fbcdn.net/v/t1.0-0/p206x206/11218856_876696205776687_727177950781805578_n.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_ohc=k4SErDHzNzIAX8ZUFhv&_nc_ht=scontent.fjrs4-1.fna&tp=6&oh=95b354d27d46a7b012a79889f974df67&oe=5FDCDA2F"} alt="img" class="imag" onClick={() => {
                        window.location.href = '/fastfoodres/royal'
                    }} /></td>
                    <td><img src={"https://scontent.fjrs4-1.fna.fbcdn.net/v/t1.0-0/p206x206/90229186_2758666261028233_6529146619806351360_o.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_ohc=3_gbSW667hIAX-Tk4PR&_nc_ht=scontent.fjrs4-1.fna&tp=6&oh=4c249adf7c47faf7861833adf2877cf7&oe=5FDC15D0"} alt="img" class="imag" /></td>
                </tr>
                <tr>
                    <th class="text-center">AbuMazen Resturant</th>
                    <th class="text-center">Arabesque Restaurant</th>
                    <th class="text-center">Ibrahim Paşa Restaurant</th>
                    <th class="text-center" onClick={() => { window.location.href = '/fastfoodres/royal' }}>Talet Jabal</th>
                    <th class="text-center">Ward Restaurant</th>
                </tr> */}
            </table>

        </div>
    );
}


export default Seafoodrest;