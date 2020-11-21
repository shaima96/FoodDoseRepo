import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import './sara.css'
import axios from 'axios';
import Header2 from '../Header2/header2';

class Sara extends React.Component {
    state = {
        royal: []
    };


    componentDidMount() {
        const id = "5fb4cc6bed78552714cfb3af"
        axios.get(`http://localhost:5000/fooddose/fastfoodres/royal/${id}`)
            .then(fastfoodres => {
                this.setState({
                    royal: fastfoodres.data[49]
                });
                console.log(this.state.royal)
            })

    }
    render() {
        return (
            <div className='royal'>
                <Header2/>
                <div className='royalimg'>
                    <img src={this.state.royal.Image} alt="img" class="royalimg" />
                    <div class="royalinfo">
                        <h1>Contact Details</h1>
                        <h2>Address: {this.state.royal.Address}</h2>
                        <h3>Phone: {this.state.royal.Phone }</h3>
                    </div>

                    <div class="royalsocial">
                        <a href="https://www.facebook.com/" ><FacebookIcon style={{ color: "white", fontSize: "xx-large" }} stroke={"black"} stroke-width={2} /></a>
                        <a href="https://www.instagram.com/" ><InstagramIcon style={{ color: "black", fontSize: "xx-large" }} /></a>
                        <a href="https://www.twitter.com/" ><TwitterIcon style={{ color: "white", fontSize: "xx-large" }} stroke={"black"} stroke-width={2} /></a>
                    </div>
                </div>
            </div >
        )
    }
}

export default Sara;