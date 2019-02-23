// Entry Point Next.js: index.jsx 

// Desplegará unicamente Login:(Dialog MaterialUI)

// Si estas autenticado => CSA
// sino => Register.

// La autenticación se hace a travez de una petición Axios (Post)
// con el e-mail y el password. Si son correctos el servidor devuelve
// true en 

import React, { Component, Fragment } from 'react';
import Link from 'next/link'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faFacebookSquare, faInstagram, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'

library.add(fab, faFacebookSquare, faInstagram, faTwitterSquare )
// Se deben declarar los iconos para que esten disponibles en todos los componentes

//Componentes 
import Csa from './Csa.js'
import NavBar from '../components/NavBar.jsx'
import Home from '../components/Home.jsx'

// FALTA TOKEN.
     // CREAR EL AVATAR!
            // CONFIGURAR EL REGISTER PARA HACER EL POST!


let validarAuth = false;

class App extends React.Component {
    
    constructor(...props) {
        super(...props)

        this.state = {
            
            authed: false,
            token: "",   
        }
  
        this.handleAuthentication = this.handleAuthentication.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
    }


    handleAuthentication(auth,token){

        console.log("Auth Index")
        console.log(auth)
        console.log("Token Index")
        console.log(token)

        if (auth === true) {

            console.log("Dentro del if del INDEX")

            this.setState({
                authed: true,
                token: token
            })


        }
    
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
                    <Csa handleLogout={this.handleLogout} token={this.state.token}/>
                </div>
                )
                
                :( 
               <div>
                    <NavBar handleAuthentication={this.handleAuthentication}/>
                    <Home/>
               </div>
                
                )
        
    }
}
export default App