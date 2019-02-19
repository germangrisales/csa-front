import React from 'react';

import axios from 'axios';
import {
    WbIncandescentIcon, withStyles, Drawer, CssBaseline, AppBar, Toolbar, List, Typography, Divider, IconButton, MenuIcon, Button, LocationOnIcon, WbSunnyIcon, CloudIcon, WhatshotIcon, ToysIcon, WifiTetheringIcon, ChevronLeftIcon, ChevronRightIcon, ListItem, ListItemIcon, ListItemText, InboxIcon, MailIcon, Paper, Grid
} from "./MaterialUi.jsx"
// Todo los componentes material UI se deben agregar en "./helpers/MaterialUi.jsx

const styles = theme => ({
    lightOn: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'yellow',
        borderRadius: '50px',
        height: "100px",
        width: "100px",
    },
    lightOff: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'grey',
        borderRadius: '50px',
        height: "100px",
        width: "100px",
    }

})

class Switches extends React.Component {
   
    constructor(...props) {

        super(...props)

        this.state = {
            
            luces: this.props.luces,
            ventiladores: this.props.ventiladores
        }

        this.handleOnClickLight = this.handleOnClickLight.bind(this)
        this.handleOnClickFan = this.handleOnClickFan.bind(this)

        // axios({
        //     method: 'get',
        //     url: "http://192.168.1.8:8080/referenceValues",

        // }).then(response => {

    //         console.log(response)

    //             const luces = response.data.latestReferenceValues.actuators[0]
    //             // Se captura el estado del actuador "Luces" de la respuesta de la petición Axios 1 = ON 0 = OFF

    //             const ventiladores = response.data.latestReferenceValues.actuators[1]
    //             // Se captura el estado del actuador "Luces" de la respuesta de la petición Axios 1 = ON 0 = OFF


    //             if (luces === 1) { // Si está prendido = 1 <---> setea el estado en True

    //                 this.setState({
    //                     luces: true,
    //                 })
    //             }
    //             if (luces === 0) { // Si está prendido = 0 <---> setea el estado en False
    //                 this.setState({
    //                     luces: false,
    //                 })
    //             }

    //             if (ventiladores === 1) {// Si está prendido = 1 <---> setea el estado en True

    //                 this.setState({
    //                     ventiladores: true,
    //                 })
    //             }
    //             if (ventiladores === 0) {// Si está prendido = 0 <---> setea el estado en False
    //                 this.setState({
    //                     ventiladores: false,
    //                 })
    //             }

    //             console.log("Luces: " + luces)
    //             console.log("Ventilador: " + ventiladores)
    //             // Se confirma el estado en el que esten

    //         })
    //         .catch(function (error) {
    //             console.log("Este es el error");
    //             console.log(error);
    //         });
 
    }

    handleOnClickLight(){


        if (this.state.luces === true){

            this.setState({
                luces: false     
            })
        }
        if (this.state.luces === false) {

            this.setState({
                luces: true

            })
        }
    }

    handleOnClickFan() {


        if (this.state.ventiladores === true) {

            this.setState({
                ventiladores: false
            })
        }
        if (this.state.ventiladores === false) {

            this.setState({
                ventiladores: true

            })
        }
    }
    
    componentWillReceiveProps(){

        this.setState({
            luces: this.props.luces,
            ventiladores: this.props.ventiladores
         });
    }

    render() {
        const { classes } = this.props
        return (

      
        
                <Grid container spacing={16}>

                <Grid item xs={6}>

                        <Button onClick={this.handleOnClickLight} variant="contained" color="primary" >
                            Luces
                        </Button>
                        {/* Luces: Si está ON -->Off */}
                        {
                            this.state.luces === true
                                ? (
                                    <ListItemIcon className={classes.lightOn}>
                                        <WbIncandescentIcon size="large" color="disable" />
                                    </ListItemIcon>
                                )

                                : (
                                    <ListItemIcon className={classes.lightOff}>
                                        <WbIncandescentIcon size="large" color="disable" />
                                    </ListItemIcon>
                                )
                        
                        }


                
                        
                
                    </Grid>

                    <Grid item xs={6}>


                    <Button onClick={this.handleOnClickFan} variant="contained" color="primary" >
                        Ventiladores
                    </Button>
                    {/* Luces: Si está ON -->Off */}
                    {
                        this.state.ventiladores === true
                            ? (
                                <ListItemIcon className={classes.lightOn}>
                                    <ToysIcon size="large" color="disable" />
                                </ListItemIcon>
                            )

                            : (

                                <ListItemIcon className={classes.lightOff}>
                                    <ToysIcon size="large" color="disable" />
                                </ListItemIcon>
                            )

                    }

                       
                    </Grid>

                </Grid>

                
       
        );
    }
}

export default withStyles(styles)(Switches);