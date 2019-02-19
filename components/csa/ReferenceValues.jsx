import React from "react";

import MySlider from "../helpers/Slider.jsx"

import {
   IconButton, MenuIcon, Button
} from "../helpers/MaterialUi.jsx"
// Todo los componentes material UI se deben agregar en "./helpers/MaterialUi.jsx

import axios from 'axios';

class ReferenceValues extends React.Component {

    constructor(...props) {
        super(...props)

        this.state = {

            value: null,
            maxValueTemperature: null,
            minValueTemperature: null,

            maxValueHumidity: null,
            minValueHumidity: null,

            maxValueAirQuality: null,
        }

        this.handleGetMaxValueTemperature = this.handleGetMaxValueTemperature.bind(this)
        this.handleGetMinValueTemperature = this.handleGetMinValueTemperature.bind(this)

        this.handleGetMaxValueHumidity = this.handleGetMaxValueHumidity.bind(this)
        this.handleGetMinValueHumidity = this.handleGetMinValueHumidity.bind(this)

        this.handleGetMaxValueAirQuality = this.handleGetMaxValueAirQuality.bind(this)

        this.handleOnClickSendValues = this.handleOnClickSendValues.bind(this)

        
    }  

    handleOnClickSendValues(){
    //Peticion Axios para enviar Nuevos valores de referencia:

         alert("Se enviaron los valores de referencia")
    }
    // Temperatura:
    handleGetMaxValueTemperature(value) {
        this.setState({ maxValueTemperature: value });
    }
    handleGetMinValueTemperature(value) {
        this.setState({ minValueTemperature: value });
    }

    //Humedad:
    handleGetMaxValueHumidity(value) {
        this.setState({ maxValueHumidity: value });
    }
    handleGetMinValueHumidity(value) {
        this.setState({ minValueHumidity: value });
    }


    //Calidad de Aire:
    handleGetMaxValueAirQuality(value) {
        this.setState({ maxValueAirQuality: value });
    }


    render() {
        return (
            <div>
                <h1>Valores de Referencia</h1>

                <h2>Temperatura</h2>
                <p>Ingrese valores máximos y minimos:</p>

                <MySlider label="Valor Máximo" unidad='ºC' sendValue={this.handleGetMaxValueTemperature} />

                <MySlider label="Valor Mínimo" unidad='ºC' sendValue={this.handleGetMinValueTemperature} />

                <h2>Humedad</h2>
                <p>Ingrese valores máximos y minimos:</p>

                <MySlider label="Valor Máximo" unidad='%' sendValue={this.handleGetMaxValueHumidity} />

                <MySlider label="Valor Mínimo" unidad='%' sendValue={this.handleGetMinValueHumidity} />

                <h2>Calidad de Aire</h2>
                <p>Ingrese valores máximos:</p>
                <MySlider label="Valor Máximo" unidad='%' sendValue={this.handleGetMaxValueAirQuality} />

                <Button onClick={this.handleOnClickSendValues} variant="contained" color="primary" >
                    Ventiladores
                    </Button>

            </div>
        )
    }
}
export default ReferenceValues