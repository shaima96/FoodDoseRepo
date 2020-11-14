import React, { Component } from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import TwitterIcon from '@material-ui/icons/Twitter';






function Footer() {
    return (
      <div className="footer">
        <footer class="py-5 bg-dark fixed-bottom">
         <div class="container1">
        <PhoneIcon/>
        <h3>0592444444</h3>
         </div>
         <div class="container2">
        <MailOutlineIcon />
        <h3>fooddose@gmail.com</h3>
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
            <p class="m-0 text-center text-white">
              Copyright & 2020
            </p>
          </div>
        </footer>
      </div>
    );
  }
  
  export default Footer;