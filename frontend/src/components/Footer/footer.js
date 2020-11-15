import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import TwitterIcon from '@material-ui/icons/Twitter';
import CopyrightOutlinedIcon from '@material-ui/icons/CopyrightOutlined';
import './footer.css'
import Phone from "./phone.png"
function Footer() {
    return (
      <div className="footer">
         <div class="container1">
         <img src={Phone} alt="img" class="phone"/><p>0592444444</p><br/>
         </div>
         <div class="container2">
        <MailOutlineIcon />
        <p>fooddose@gmail.com</p>
         </div>
         <table class="socialMedia">
         <tr>
           <td><a href="https://www.facebook.com/" ><FacebookIcon  style={{color: "#F69624"}} stroke={"black"} stroke-width={2}/></a></td>
           <td><a href="https://www.instagram.com/" ><InstagramIcon style={{color: "black"}} /></a></td>
           <td><a href="https://www.twitter.com/" ><TwitterIcon style={{color: "#F69624"}} stroke={"black"} stroke-width={2}/></a></td>
         </tr>
         </table>
          <div class="container3">
            <p><b>Copyright <CopyrightOutlinedIcon/> 2020</b></p>
          </div>
      </div>
    );
  }
  
  export default Footer;