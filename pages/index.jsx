// Entry Point Next.js: index.jsx 

// Desplegará unicamente Login:(Dialog MaterialUI)

// Si estas autenticado => CSA
// sino => Register.

import React, { Component, Fragment } from 'react';
import Link from 'next/link'

//Componentes 
import Login from './Login.jsx'
import Csa from './Csa.jsx'


class App extends React.Component {
    
    constructor(...props) {
        super(...props)

        this.state = {
            
            authed: false 
        }
  
        this.handleOnSubmit = this.handleOnSubmit.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
    
    }

    handleOnSubmit(){

        this.setState({
            authed: true
        })
        
    }

    handleLogout() {

        this.setState({
            authed: false
        })

    }

    render() {

        return this.state.authed === true
                ?( 
                <div>
                    <Csa/>
                    <button onClick={this.handleLogout}>Logout</button>
                </div>
                )
                
                :( 
                
                <Login handleOnSubmit={this.handleOnSubmit}/>
                
                )
        
    }
}
export default App