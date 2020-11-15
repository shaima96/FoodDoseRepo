import React from 'react';
import './header.css'
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { useHistory } from "react-router-dom";
const Login = styled(Button)({
    background: '#F69624',
    border: 0,
    borderRadius: 30,
    color: 'white',
    height: 48,
    padding: '0 30px',
});
function Header() {
    let history = useHistory();
    return (
      <div className="header">
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
      </div>
    );
  }
  
  export default Header;