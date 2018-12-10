import React, { Component } from 'react';
import socketIOClient from "socket.io-client";

class Socket extends Component {

    constructor(...props) {

        super(...props)

        this.state = {
            response: false,
            endpoint: "https://csa-systems.herokuapp.com"
        };

    }

    componentDidMount() {
        const { endpoint } = this.state;
        const socket = socketIOClient(endpoint);
        socket.on("mensajeBienvenida", data => this.setState({ response: data }));
        console.log(this.state.response)
    }

    render() {
        const { response } = this.state;
        return (
            <div style={{ textAlign: "center" }}>
                {response
                    ? <p>
                        Mensaje del administrador: {this.state.response.admin}
                    </p>
                    : <p>Loading...</p>}
            </div>
        );
    }
}

export default Socket