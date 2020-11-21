import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './bakeriesrest.css'
import Header2 from '../Header2/header2';
import Logout from '../logout/logout';

function Bakeriesrest() {
    return (
        <div class='container'>
            <Header2 />
            <Logout />
            <table class='bakerie' align="center">
                <tr>
                    <td><img src={"https://scontent.fjrs4-1.fna.fbcdn.net/v/t31.0-8/p960x960/22254677_1502323843195017_569180221215907570_o.png?_nc_cat=104&ccb=2&_nc_sid=85a577&_nc_ohc=MQe4Am8KfRYAX-pFWen&_nc_ht=scontent.fjrs4-1.fna&oh=2766dcdd77fce775faecd1ead62c6d62&oe=5FDB1DA6"} alt="img" class="imag" /></td>
                    <td><img src={"https://scontent.fjrs4-1.fna.fbcdn.net/v/t1.0-9/73370719_3068634719816821_845807222406512640_n.jpg?_nc_cat=100&ccb=2&_nc_sid=85a577&_nc_ohc=vAlDw9S5j74AX-KNW5h&_nc_ht=scontent.fjrs4-1.fna&oh=cdf8a2f7f1ce5cb07018a487386660a4&oe=5FD97AFE"} alt="img" class="imag" /></td>
                    <td><img src={"https://scontent.fjrs4-1.fna.fbcdn.net/v/t1.0-0/p206x206/117230709_659245704940515_5467039719266807705_o.jpg?_nc_cat=106&ccb=2&_nc_sid=09cbfe&_nc_ohc=zRDDgSiKH8QAX9cXyJe&_nc_ht=scontent.fjrs4-1.fna&tp=6&oh=5da953fcbf65e8b8e5377699224469b2&oe=5FDCE993"} alt="img" class="imag" /></td>
                    <td><img src={"https://shobiddak.com/uploads/picture/daleel/name/10080/thumb_logo.jpg"} alt="img" class="imag" /></td>
                    <td><img src={"https://scontent.fjrs4-1.fna.fbcdn.net/v/t1.0-0/c39.0.206.206a/p206x206/125761457_2849757628637554_4466273692628133311_n.jpg?_nc_cat=109&ccb=2&_nc_sid=e3f864&_nc_ohc=WfxLwc3x1aAAX_WDYWX&_nc_ht=scontent.fjrs4-1.fna&tp=27&oh=8dc5d0d2980c7ee74ff9ba54e48cb564&oe=5FDB5548"} alt="img" class="imag" /></td>
                </tr>
                <tr>
                    <th class="text-center">Pizza one</th>
                    <th class="text-center">Al-Tanoor</th>
                    <th class="text-center">Taboon-al-reef</th>
                    <th class="text-center">Pizza Home</th>
                    <th class="text-center">Salaymah bakerie</th>

                </tr>
                <tr></tr>
                <tr>
                    <td><img src={"https://scontent.fjrs4-1.fna.fbcdn.net/v/t1.0-9/95668325_1966227063509716_3839660901032525824_n.jpg?_nc_cat=105&ccb=2&_nc_sid=85a577&_nc_ohc=oOpL4EyLnLoAX8wfsm6&_nc_ht=scontent.fjrs4-1.fna&oh=7d6d40c0eb2ef90e0db05262aa4e5d99&oe=5FDDB760"} alt="img" class="imag" /></td>
                    <td><img src={"https://scontent.fjrs4-1.fna.fbcdn.net/v/t1.0-0/p206x206/25552209_919124751570755_1427506206719772204_n.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_ohc=GUpL5JZAXIcAX97krVp&_nc_ht=scontent.fjrs4-1.fna&tp=6&oh=1f78ce772090697d49d284fac2175460&oe=5FDC1D12"} alt="img" class="imag" /></td>
                    <td><img src={"https://scontent.fjrs4-1.fna.fbcdn.net/v/t1.0-0/p206x206/60190256_1055594928161436_7686822026144645120_o.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_ohc=gG16iQwqWskAX9QoF5a&_nc_ht=scontent.fjrs4-1.fna&tp=6&oh=b22b662972777e285210918a99dbd33e&oe=5FDDFAF7"} alt="img" class="imag" /></td>
                    <td onClick={() => { window.location.href = '/fastfoodres/helth/54elfwnkwk654f56ew456a' }} ><img src={"https://scontent.fjrs4-1.fna.fbcdn.net/v/t1.0-0/p206x206/52930354_391217931442632_8737179471204843520_o.jpg?_nc_cat=106&ccb=2&_nc_sid=174925&_nc_ohc=w3jc8ENFjEIAX-nbwOU&_nc_ht=scontent.fjrs4-1.fna&tp=6&oh=ea26ecb56b9cae3c3c6fa692de6f8ed2&oe=5FDB639C"} alt="img" class="imag"  /></td>
                    <td onClick={() => { window.location.href = '/fastfoodres/helth/ewef54ewfasda5sd54asd4' }}><img src={"https://scontent.fjrs4-1.fna.fbcdn.net/v/t1.0-0/p206x206/90229186_2758666261028233_6529146619806351360_o.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_ohc=3_gbSW667hIAX-Tk4PR&_nc_ht=scontent.fjrs4-1.fna&tp=6&oh=4c249adf7c47faf7861833adf2877cf7&oe=5FDC15D0"} alt="img" class="imag" /></td>
                </tr>
                <tr>
                    <th class="text-center">Fanoun bakerie</th>
                    <th class="text-center">Arabesque</th>
                    <th class="text-center">Al Tahan bakerie</th>
                    <th class="text-center" onClick={() => { window.location.href = '/fastfoodres/helth/54elfwnkwk654f56ew456a'}}>Ibrahim Paşa</th>
                    <th class="text-center" onClick={() => { window.location.href = '/fastfoodres/helth/ewef54ewfasda5sd54asd4' }}>Ward</th>
                </tr>
            </table>

        </div>
    );
}


export default Bakeriesrest;