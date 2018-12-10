import {
    DialogActions, AccountCircleIcon, TextField, DialogContentText, DialogContent, DialogTitle, Dialog, withStyles, Button 
} from "../components/helpers/MaterialUi.jsx"
// Todo los componentes material UI se deben agregar en "./helpers/MaterialUi.jsx

import React,{Fragment} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// import Register from './Register.jsx'

import SubmitButton from '../components/helpers/SubmitButton.jsx';

// import Image from 'material-ui-image'

//import CSALogo from '../media/CSA.jpg'


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',

  },
  textField: {
    width: 500,
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
  containe: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '1.5em',
  },
  item: {
    verticalAlign:'middle',
  },
});


class Login extends React.Component {

    constructor(...props){
        super(...props)
    
        this.state = { 
            open: true,
            form:{
              email: '',
              password: ''
            }
           
        }
        
       // this.handleOnSubmit = this.handleOnSubmit.bind(this)
      this.handleClickOpen = this.handleClickOpen.bind(this)
      this.handleClose = this.handleClose.bind(this)
      this.handleChange = this.handleChange.bind(this)
      
      
    }

  handleOnSubmit(e){

    // alert('Click')
    // e.preventDefault()

    // let form = e.target

    // console.log(form.email.value)

    // console.log(form.password.value)

    // this.setState({
    //     mail: form.email.value,
    //     password: form.password.value
    // })

    // console.log(this.state)
  }


  handleClickOpen(){
    this.setState({ open: true })
  }

  handleClose(){
    this.setState({ open: false })
  }

  handleChange(e) {

    console.log(e.target) //+ " name:"+name 
    console.log(this.state)
    

    const { target: {name,value} } = e

    this.setState({
        
        form:{
            ...this.state.form,
            [name]: value
        } 
    })
  }

  render() {
    const { classes } = this.props;
    const { open, form:{email, password} } = this.state;


    return (

    <Fragment>
        
        <Button onClick={this.handleClickOpen}>Login</Button>
        
        <Dialog // <Dialog> Aqui va todo el Login </Dialog>
          // fullScreen={fullScreen}
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
          className={classes.container}
        >
          <DialogTitle id="responsive-dialog-title">
          
             {/* {CSAlogo}  */}
            
            CSA: Control Sistematizado Avícola
          
          </DialogTitle>
          
          <DialogContent>
            {/* Aqui se mete el contenido */}
            
              <DialogContentText>
                Ingrese su información para validar el acceso:
              </DialogContentText>

            <form onSubmit={this.handleOnSubmit} className={classes.container} noValidate autoComplete="off">

              <TextField
                name="email"
                label="E-mail"
                className={classes.textField}
                type = "email"
                value = {email}
                onChange={this.handleChange}
                autoComplete="email"
                margin="normal"
                variant="filled"
              />
              <br/>
              <TextField
                id="standard-password-input"
                name="password"
                label="Contraseña"
                className={classes.textField}
                type="password"
                value={password}
                onChange={this.handleChange}
                autoComplete="current-password"
                margin="normal" 
              />
    
            </form>
            <br/>
            <DialogContentText className={classes.containe}>
              No estas registrado?
              <br />
            <div className={classes.containe}>
            
              {/* <Register className={classes.item}/> */}
            
              <AccountCircleIcon className={classes.item}/>

            </div>    
            </DialogContentText>


          </DialogContent>

          <DialogActions>
            {/* Aqui se mete los botones que realizn acciones */}
           
            <div onClick={this.handleClose}>
              <SubmitButton  color="primary">
              </SubmitButton>
            </div>

          </DialogActions>
        </Dialog>
    </Fragment>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Login);