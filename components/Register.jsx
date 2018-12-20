import {
    withStyles, MenuItem, TextField, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, withMobileDialog
} from "../components/helpers/MaterialUi.jsx"
// Todo los componentes material UI se deben agregar en "./helpers/MaterialUi.jsx

import SubmitButton from '../components/helpers/SubmitButton.jsx';

import React,{Fragment} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// impor


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
});


class Register extends React.Component {

    constructor(...props){
        super(...props)
    
        this.state = { 
            open: false,
            form:{
              name:'', 
              profession:'',
              description: '', 
              email: '',
              tel: '',
              password: ''
            }
           
        }
        
        this.handleOnSubmit = this.handleOnSubmit.bind(this)
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
      const { open, form: {name,profession,description,email,tel,password} } = this.state;


    return (

    <Fragment>
        <Button onClick={this.handleClickOpen}>Registrarme</Button>
        
        <Dialog // <Dialog> Aqui va todo el Register </Dialog>
          // fullScreen={fullScreen}
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
          className={classes.container}
        >
          <DialogTitle id="responsive-dialog-title">
          
             {/* {CSAlogo}  */}
            
            CSA: Formulario de Registro.
          
          </DialogTitle>
          
          <DialogContent>
            {/* Aqui se mete el contenido */}
            
              <DialogContentText>
                Ingrese su información para crear una cuenta:
              </DialogContentText>

            <form onSubmit={this.handleOnSubmit} className={classes.container} noValidate autoComplete="off">
                
                <TextField
                  id="standard-name"
                  name="name"
                  label="Nombre y apellido"
                  className={classes.textField}
                  value={this.state.name}
                  onChange={this.handleChange}
                  margin="normal"
                  autoComplete="name"
                />
              <br/>
              <TextField
                id="standard-name"
                name="profession"
                label="Profesión"
                className={classes.textField}
                value={profession}
                onChange={this.handleChange}
                margin="normal"
                autoComplete="profession"
              />
               <br />
               <TextField
                   id="standard-multiline-flexible"
                   name="description"
                   label="Descripción"
                   multiline
                   rowsMax="5"
                   value={description}
                   onChange={this.handleChange}
                   className={classes.textField}
                   margin="normal"
               />
               <br/>
               <TextField
                   id="standard-number"
                   name="tel"
                   label="Teléfono"
                   type="number"
                   className={classes.textField}
                   value={tel}
                   onChange={this.handleChange}
                   margin="normal"
                autoComplete="number"
               />
               <br/>
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
                label="password"
                className={classes.textField}
                type="password"
                value={password}
                onChange={this.handleChange}
                autoComplete="current-password"
                margin="normal" 
              />
    
            </form>
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

Register.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Register);