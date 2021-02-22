import React from "react";
import { AppBar, makeStyles, Toolbar } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #214f7c 30%, #337ab7 90%)',
    }
});

export default function Header() {

    const classes = useStyles();     
    return (
        <AppBar classes={{root: classes.root}}>
            <Toolbar>
               <h1 style={{margin: 0}}>Telzir</h1> 
            </Toolbar>
        </AppBar>
    )
}

