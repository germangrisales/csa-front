import React from "react";
import MySlider from "../helpers/Slider.jsx"

import SubmitButton from '../helpers/SubmitButton.jsx';

import Switches from '../helpers/Switches.jsx';

import axios from 'axios';

class Actuadores extends React.Component {

    constructor(...props) {
        super(...props)

        this.state = {

            luces: null, // Se cambia a null en uso real
            ventiladores: null // Se cambia a null en uso real 

        }
        

        axios({
            method: 'get',
            url: "https://csaserver.herokuapp.com/referenceValues",

        }).then(response => {

            console.log(response.data)

            const luces = response.data.latestReferenceValues.actuators[0]
            // Se captura el estado del actuador "Luces" de la respuesta de la petición Axios 1 = ON 0 = OFF

            const ventiladores = response.data.latestReferenceValues.actuators[1]
            // Se captura el estado del actuador "Luces" de la respuesta de la petición Axios 1 = ON 0 = OFF

            console.log("Luces: " + luces)
            console.log("Ventilador: " + ventiladores)
            // Se confirma el estado en el que esten


            if (luces === 1) { // Si está prendido = 1 <---> setea el estado en True

                this.setState({
                    luces: true,
                })
            }
            if (luces === 0) { // Si está prendido = 0 <---> setea el estado en False
                this.setState({
                    luces: false,
                })
            }

            if (ventiladores === 1) {// Si está prendido = 1 <---> setea el estado en True

                this.setState({
                    ventiladores: true,
                })
            }
            if (ventiladores === 0) {// Si está prendido = 0 <---> setea el estado en False
                this.setState({
                    ventiladores: false,
                })
            }

           
        })
            .catch(function (error) {
                console.log("Este es el error");
                console.log(error);
            });   
    }

    componentWillMount(){
        // Petición al servidor con la información del Día
    
        axios({
            method: 'get',
            url: "https://csaserver.herokuapp.com/referenceValues",

        }).then(response => {

            console.log(response.data)

            const luces = response.data.latestReferenceValues.actuators[0]
            // Se captura el estado del actuador "Luces" de la respuesta de la petición Axios 1 = ON 0 = OFF

            const ventiladores = response.data.latestReferenceValues.actuators[1]
            // Se captura el estado del actuador "Luces" de la respuesta de la petición Axios 1 = ON 0 = OFF


            if (luces === 1) { // Si está prendido = 1 <---> setea el estado en True

                this.setState({
                    luces: true,
                })
            }
            if (luces === 0) { // Si está prendido = 0 <---> setea el estado en False
                this.setState({
                    luces: false,
                })
            }

            if (ventiladores === 1) {// Si está prendido = 1 <---> setea el estado en True

                this.setState({
                    ventiladores: true,
                })
            }
            if (ventiladores === 0) {// Si está prendido = 0 <---> setea el estado en False
                this.setState({
                    ventiladores: false,
                })
            }

            console.log("Luces: " + luces)
            console.log("Ventilador: " + ventiladores)
            // Se confirma el estado en el que esten

        })
            .catch(function (error) {
                console.log("Este es el error");
                console.log(error);
            });   
           
    }
   
    render() {
        return (
            <div>
                <Switches luces={this.state.luces} ventiladores={this.state.ventiladores} />
                
            </div>
        
        )
    }
}
export default Actuadores 