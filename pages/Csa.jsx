// Componente CSA:
 
// Es un Drawer de Material Ui

// - Ubicación:
// - Sensores:
// - Actuadores:
// - Real Time

import React from "react";
import PropTypes from "prop-types";

import { // Se importa react-router-dom y unos objetos necesarios
    BrowserRouter as Router,  // Se le asigna un 'Alias' para asiganrle el nombre de las versiones anteriores y hacerlos compatibles.
    Route, // Objeto para el manejo de rutas.
    Link,// Objeto para el manejo de Enlaces
    Redirect,// Objeto para el manejo de Redireciones
    withRouter,// Objeto para hacer Switch para modificar el valor de una ruta
    Switch
} from 'react-router-dom'

import {
    Locacion, Temperature, AirQuality,
    Humidity, Fire, Actuators, ReferenceValues, RealTime 
} from "../components/helpers/CsaComponents.jsx"
// CsaComponents 

import classNames from "classnames";

import {
    withStyles, Drawer, CssBaseline, AppBar, Toolbar, List, Typography, Divider, IconButton, MenuIcon, Button, LocationOnIcon, WbSunnyIcon, CloudIcon, WhatshotIcon, ToysIcon, WifiTetheringIcon, ChevronLeftIcon, ChevronRightIcon, ListItem, ListItemIcon, ListItemText, InboxIcon, MailIcon, Paper, Grid
} from "../components/helpers/MaterialUi.jsx"
// Todo los componentes material UI se deben agregar en "./helpers/MaterialUi.jsx

const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: "flex",

    },
    appBar: {
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        })
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    },
    hide: {
        display: "none"
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },
    drawerPaper: {
        width: drawerWidth
    },
    drawerHeader: {
        display: "flex",
        alignItems: "center",
        padding: "0 8px",
        ...theme.mixins.toolbar,
        justifyContent: "flex-end"
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        marginLeft: -drawerWidth
    },
    contentShift: {
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        }),
        marginLeft: 0
    }
});

class Csa extends React.Component {

    constructor(...props) {
        super(...props)

        this.state = {

            open: false,
            token: this.props.token

        };

        // this.handleOnSubmit = this.handleOnSubmit.bind(this)
        this.handleDrawerOpen = this.handleDrawerOpen.bind(this)
        this.handleDrawerClose = this.handleDrawerClose.bind(this)
    }


    handleDrawerOpen() {
        this.setState({ open: true })
    }

    handleDrawerClose() {
        this.setState({ open: false })
    }

    render() {
        const { classes, theme } = this.props;
        const { open } = this.state;

        return (

            <Router>
                <div className={classes.root}>
                    <CssBaseline />

                    <AppBar // Barra superior: Menu-Hamburguesa y CSA:
                        position="fixed"
                        className={classNames(classes.appBar, {
                            [classes.appBarShift]: open
                        })}
                    >
                        <Toolbar disableGutters={!open}>



                            <IconButton
                                color="inherit"
                                aria-label="Open drawer"
                                onClick={this.handleDrawerOpen}
                                className={classNames(classes.menuButton, open && classes.hide)}
                            >
                                <MenuIcon // Icono de menu-Hamburguesa
                                />

                            </IconButton>

                            <Typography variant="h6" color="inherit" noWrap>
                                CSA: Control Sistematizado Agrícola
                            </Typography>
                            <Grid container
                                spacing={16}
                                //className={classes.demo}
                                alignItems="center"
                                direction="row"
                                justify="flex-end"
                            >

                                <Grid item ><Button color="inherit" >Login</Button></Grid>

                                <Grid item ><Button color="inherit">Register</Button></Grid>

                            </Grid>

                        </Toolbar>

                    </AppBar>

                    <Drawer
                        className={classes.drawer}
                        variant="persistent"
                        anchor="left"
                        open={open}
                        classes={{
                            paper: classes.drawerPaper
                        }}
                    >
                        <div className={classes.drawerHeader}>

                            <IconButton onClick={this.handleDrawerClose}>
                                {theme.direction === "ltr" ? (
                                    <ChevronLeftIcon />
                                ) : (
                                        <ChevronRightIcon />
                                    )}
                            </IconButton>
                        </div>

                        <Divider />

                        <List>

                            <ListItem button key={<Link to="/realtime">Tiempo Real</Link>}>
                                <ListItemIcon>
                                    <LocationOnIcon />
                                </ListItemIcon>
                                <ListItemText primary={<Link to="/realtime">Tiempo Real</Link>} />
                            </ListItem>

                            <ListItem button key={<Link to="/temperatura">Temperatura</Link>}>
                                <ListItemIcon>
                                    <WbSunnyIcon />
                                </ListItemIcon>
                                <ListItemText primary={<Link to="/temperatura"> TEMPERATURA</Link>} />
                            </ListItem>

                            <ListItem button key={<Link to="/humedad"> Humedad</Link>}>
                                <ListItemIcon>
                                    <CloudIcon />
                                </ListItemIcon>
                                <ListItemText primary={<Link to="/humedad"> HUMEDAD</Link>} />
                            </ListItem>

                            <ListItem button key={<Link to="/fuego">Fuego</Link>}>
                                <ListItemIcon>
                                    <WhatshotIcon />
                                </ListItemIcon>
                                <ListItemText primary={<Link to="/fuego"> FUEGO</Link>} />
                            </ListItem>

                            <ListItem button key={<Link to="/actuadores"> Actuadores</Link>}>
                                <ListItemIcon>
                                    <ToysIcon />
                                </ListItemIcon>
                                <ListItemText primary={<Link to="/actuadores"> ACTUADORES</Link>} />
                            </ListItem>

                            <ListItem button key={<Link to="/calidadAire">Aire</Link>}>
                                <ListItemIcon>
                                    <WifiTetheringIcon />
                                </ListItemIcon>
                                <ListItemText primary={<Link to="/calidadAire">AIRE</Link>} />
                            </ListItem>

                            <ListItem button key={<Link to="/referencevalues">Valores de Referencia</Link>}>
                                <ListItemIcon>
                                    <WifiTetheringIcon />
                                </ListItemIcon>
                                <ListItemText primary={<Link to="/referencevalues">VALORES DE REFERENCIA</Link>} />
                            </ListItem>

                        </List>

                    </Drawer>

                    <main className={classNames(classes.content, {
                        [classes.contentShift]: open
                    })}
                    >
                        <div className={classes.drawerHeader} />

                        <Grid container >

                            <Grid item xs={12}>

                                <Switch>

                                    <Route exact path='/' component={Actuators} />

                                    {/* <Route exact path='/csa' component={RealTime} /> */}

                                    <Route path='/actuadores' component={Actuators} />

                                    <Route path='/temperatura' component={Temperature} />

                                    <Route path='/humedad' component={Humidity}/>

                                    <Route path='/calidadAire' component={AirQuality} />

                                    <Route path='/fuego' component={Fire} />

                                    <Route path='/realtime' component={RealTime} />

                                    <Route path='/referencevalues' component={ReferenceValues} />

                                </Switch>

                            </Grid>
                        </Grid>
                    </main>

                </div>

            </Router>
        );
    }
}

Csa.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Csa);
