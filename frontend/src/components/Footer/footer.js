import React, { Component } from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import TwitterIcon from '@material-ui/icons/Twitter';
import './footer.css'
function Footer() {
    return (
      <div className="footer">
         <div class="container1">
        <PhoneIcon/><p>0592444444</p>
         </div>
         <div class="container2">
        <MailOutlineIcon />
        <p>fooddose@gmail.com</p>
         </div>
         <div class="container3">
         <a href="https://www.instagram.com/" ><InstagramIcon/></a>
         </div>
     
         <div class="container4">
         <a href="https://www.twitter.com/" ><TwitterIcon/></a>
         </div>

         <div class="container5">
         <a href="https://www.facebook.com/" ><FacebookIcon/></a>
         </div>
          <div class="container6">
            <p >
              <b>Copyright & 2020</b>
            </p>
          </div>
      </div>
    );
  }
  
  export default Footer;