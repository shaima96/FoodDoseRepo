import React from 'react';
import './header2.css'
import { styled, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Title from '../Title/title.js';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));
const Logout = styled(Button)({
    background: '#F69624',
    border: 0,
    borderRadius: 30,
    color: 'white',
    height: 48,
    padding: '20px 30px',
});
function Header2() {
    const classes = useStyles();



    return (
        <div className={classes.root}>
            <AppBar position="static" class="appbar">
                <Toolbar>

                    <Typography>
                        <Title />
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );

}


export default Header2;