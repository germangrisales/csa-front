import React, { Component } from 'react';
import socketIOClient from "socket.io-client";

class RealTime extends Component {

    constructor(...props) {

        super(...props)

        this.state = {
            response: false,
            endpoint: "http://localhost:3000"
        };

    }

    componentDidMount() {

        const { endpoint } = this.state;
        const socket = socketIOClient(endpoint);
        socket.on("realTime", data => this.setState({ response: JSON.parse(data) }));
        console.log(this.state.response)
    }

    render() {

        const { response } = this.state;
        return (
            <div style={{ textAlign: "center" }}>
                {response
                    ? <p>
                        Mensaje del administrador: {JSON.stringify(response)}
                    </p>
                    : <p>Loading...</p>}
            </div>
        );
    }
}

export default RealTime