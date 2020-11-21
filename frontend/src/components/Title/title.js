import React from 'react';
import './title.css';
import { styled, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
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

function Title() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static" class="appbar">
                <Toolbar>

                    <Typography variant="h6" className={classes.title} id="fooddose" onClick={() => {
                        window.location.href = '/'
                    }} >
                        FoodDose
                            </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );

}
export default Title;