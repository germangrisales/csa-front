// Entry Point Next.js: index.jsx 

// Desplegará unicamente Login:(Dialog MaterialUI)

// Si estas autenticado => CSA
// sino => Register.

// La autenticación se hace a travez de una petición Axios (Post)
// con el e-mail y el password. Si son correctos el servidor devuelve
// true en 

import React, { Component, Fragment } from 'react';
import Link from 'next/link'

import axios from 'axios'

//Componentes 
import Login from './Login.jsx'
import Csa from './Csa.jsx'
import Home from './Home.jsx'

import NavBar from '../components/NavBar.jsx'
import Grid from '@material-ui/core/Grid';

let validarAuth = false;

class App extends React.Component {
    
    constructor(...props) {
        super(...props)

        this.state = {
            
            authed: false,
            token: "",
            
            form: {
                email: '',
                password: ''
            }

        }
  
        this.handleOnSubmit = this.handleOnSubmit.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
        this.getData = this.getData.bind(this)
    
    }

    getData(e){
        console.log("Index Form:")
        console.log(e);

        // Se mete en el estado lo que venga en e= Form
    }

    handleOnSubmit(e){

        console.log("Index Form:")
        console.log(e)

    // Aquí se envia el post con el E-mail y Password:
    //    Si coincide con la base de datos: authed: true
    //     Si no: Password o E-mail incorrecto.
       
   // alert('Click')

        this.setState({

            form: {
                email: e.email,
                password: e.password
            }
        })
        
        const email = e.email
        const password= e.password

        axios.post('https://csaserver.herokuapp.com/login', {
            email: email,
            passwd: password
        })
            .then(response =>{
                console.log(response)
                
               

                const authenticated = response.data.ok

                console.log(authenticated)

                const token = response.data.token

                console.log(token)


                if (authenticated === true) {

                    console.log("Dentro del if!")
                    
                        this.setState({
                            authed: true,
                            
                            token: token
                        })
                       
                    console.log("Haz sido autenticado")

                   // return response.data.ok
                    
                }
 
            })
            .catch(function (error) {
                
                console.log(error.response.data.ok);

                if (error.response.data.ok === false) {
                    
                    console.log("Dentro del if Error!")

                    alert("e-mail o password Incorrecto")
                }
            });
        // this.setState({
        //     authed: true
        // })   
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
                    <Csa token={this.state.token}/>
                    <button onClick={this.handleLogout}>Logout</button>
                </div>
                )
                
                :( 
          
                // <Login handleOnSubmit={this.handleOnSubmit}/>
               
                <Home/>
                
                )
        
    }
}
export default App