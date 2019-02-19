import React, { Component, Fragment } from 'react' // NO necesitan comas según el standart ES6
// manera destructurada la clase Component
import NavBar from '../components/NavBar.jsx'
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


export default class Home extends Component {

    constructor(...props) {
        super(...props)

    }

    render() {
        const  classes  = this.props;
        return (
        
        <div>
            <NavBar/>

            <Grid container spacing={4}>
                    
                    <Grid item xs={4}> 
                    A
                    </Grid>
                    <Grid item xs={4}>
                    B
                    </Grid>
                    <Grid item xs={4}>
                    C
                    </Grid>
            </Grid>

        </div>
            
        )//Fin return

    } //Fin render()

} // Fin Class