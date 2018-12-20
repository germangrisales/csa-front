import React from 'react';
import PropTypes from 'prop-types';

import {
    AppBar, Toolbar, Typography, IconButton, withStyles, MenuIcon, Button
} from "../components/helpers/MaterialUi.jsx"
// Todo los componentes material UI se deben agregar en "./helpers/MaterialUi.jsx


import Login from './Login.jsx'

import Socket from "../components/Socket.jsx"

// Se importa las paginas

// import Home from ''
// import Register from ''
// import Login from ''

const styles = {
    root: {

    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

function NavBar(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position="static">

                <Toolbar>

                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">

                        <MenuIcon />

                    </IconButton>

                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        CSA
                    </Typography>

                    <Button color="inherit">Acerca</Button>

                    <Button color="inherit">Register</Button>

                    <Button color="inherit"><Login color="inherit" style='color: white' /></Button>

                    

                </Toolbar>

            </AppBar>

            <Socket/>

        </div>
    );
}
NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);