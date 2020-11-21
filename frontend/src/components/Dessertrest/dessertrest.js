import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './dessertrest.css'
import Header2 from '../Header2/header2';
import Logout from '../logout/logout';
function Dessertrest() {
    return (
        <div class='container'>
            <Header2 />
            <Logout />
            <table class='dessert' align="center">
                <tr>
                    <td><img src={"https://scontent.fjrs4-1.fna.fbcdn.net/v/t1.0-0/p206x206/12027759_911004388990235_5037291439232041310_n.jpg?_nc_cat=108&ccb=2&_nc_sid=174925&_nc_ohc=8FoLndN4LeoAX-9tU5B&_nc_ht=scontent.fjrs4-1.fna&tp=6&oh=93dbe19234f59f51c1a458d720967d2f&oe=5FD9C2E6"} alt="img" class="imag" /></td>
                    <td><img src={"https://scontent.fjrs4-1.fna.fbcdn.net/v/t1.0-0/p206x206/123078805_3561972170490542_4855966044049904980_n.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_ohc=n2Quc-TnPNEAX-t2jis&_nc_oc=AQkJEWVR2BtdNT4d7O-lc6VJm8lDhN_2WFHFuUGIgtNTuNUae4vkkobZzpxev6716jE&_nc_ht=scontent.fjrs4-1.fna&tp=6&oh=415a239b329c072a18386b3139ab90f0&oe=5FDC598F"} alt="img" class="imag" /></td>
                    <td><img src={"https://scontent.fjrs4-1.fna.fbcdn.net/v/t1.0-0/p206x206/13230203_1155955891122831_5447779305302878449_n.jpg?_nc_cat=111&ccb=2&_nc_sid=09cbfe&_nc_ohc=NMCg4HCA2r4AX-rJpm2&_nc_ht=scontent.fjrs4-1.fna&tp=6&oh=844f1134ed9e1bdaeca80a703b11cb97&oe=5FDA9751"} alt="img" class="imag" /></td>
                    <td><img src={"https://scontent.fjrs4-1.fna.fbcdn.net/v/t1.0-0/p206x206/59574156_2263063893955838_6667895817476505600_o.png?_nc_cat=101&ccb=2&_nc_sid=09cbfe&_nc_ohc=0yjTuZWruWQAX9J3qQR&_nc_ht=scontent.fjrs4-1.fna&oh=9d5a87d91570367c5cc1df5e235e365f&oe=5FDAD660"} alt="img" class="imag" /></td>
                    <td><img src={"https://scontent.fjrs4-1.fna.fbcdn.net/v/t1.0-9/1044524_991316250929066_2733891215439952367_n.jpg?_nc_cat=103&ccb=2&_nc_sid=85a577&_nc_ohc=lxKCWVMLmZ8AX8o7wC5&_nc_ht=scontent.fjrs4-1.fna&oh=7b830e1162c30248347b95ecc38c2501&oe=5FDC86EC"} alt="img" class="imag" /></td>
                </tr>
                <tr>
                    <th class="text-center">Fratello</th>
                    <th class="text-center">Kit cake</th>
                    <th class="text-center">Karameh Sweets</th>
                    <th class="text-center">Paradise Sweets</th>
                    <th class="text-center">Al Sahel Al Akhdar</th>

                </tr>
                <tr></tr>
                <tr>
                    <td><img src={"https://scontent.fjrs4-1.fna.fbcdn.net/v/t1.0-9/95668325_1966227063509716_3839660901032525824_n.jpg?_nc_cat=105&ccb=2&_nc_sid=85a577&_nc_ohc=oOpL4EyLnLoAX8wfsm6&_nc_ht=scontent.fjrs4-1.fna&oh=7d6d40c0eb2ef90e0db05262aa4e5d99&oe=5FDDB760"} alt="img" class="imag" /></td>
                    <td><img src={"https://scontent.fjrs4-1.fna.fbcdn.net/v/t1.0-0/p206x206/37200829_262219264582688_4246184224228376576_o.jpg?_nc_cat=102&ccb=2&_nc_sid=174925&_nc_ohc=_6cuSMwjhqsAX-mTIcD&_nc_ht=scontent.fjrs4-1.fna&tp=6&oh=ad25b78f5cde69a0c5b09e9b0005d9cb&oe=5FDA88CD"} alt="img" class="imag" /></td>
                    <td><img src={"https://scontent.fjrs4-1.fna.fbcdn.net/v/t1.0-0/s206x206/91540003_132028438376091_7966444587755503616_o.jpg?_nc_cat=110&ccb=2&_nc_sid=09cbfe&_nc_ohc=rUAoEdOQs9YAX-uq138&_nc_ht=scontent.fjrs4-1.fna&tp=7&oh=b86a9d61aa92523ee9a6848f807a445c&oe=5FDC2C86"} alt="img" class="imag" /></td>
                    <td><img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO4SZHqIgfdKDq__jcZhBmWMXarkpMyuYaXA&usqp=CAU"} alt="img" class="imag" onClick={() => {
                        window.location.href = '/fastfoodres/royal'
                    }} /></td>
                    <td><img src={"https://scontent.fjrs4-1.fna.fbcdn.net/v/t1.0-9/45860141_1930892973614991_2240377184952778752_n.jpg?_nc_cat=111&ccb=2&_nc_sid=85a577&_nc_ohc=t6n1s-0hgaQAX-gQ0iU&_nc_ht=scontent.fjrs4-1.fna&oh=de49e45722e63350f13349cfb45aaaf6&oe=5FDC7576"} alt="img" class="imag" /></td>
                </tr>
                <tr>
                    <th class="text-center">Fanoun bakerie</th>
                    <th class="text-center">Sidra Sweets</th>
                    <th class="text-center">Lokma Turkish</th>
                    <th class="text-center" onClick={() => { window.location.href = '/fastfoodres/royal' }}>Nafesah sweets</th>
                    <th class="text-center">AL AQSA SWEETS</th>
                </tr>
            </table>
        </div>
    );
}


export default Dessertrest;