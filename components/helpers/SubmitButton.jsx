import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {
    withStyles, Button, SendIcon
} from "./MaterialUi.jsx"
// Todo los componentes material UI se deben agregar en "./helpers/MaterialUi.jsx



const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    leftIcon: {
        marginRight: theme.spacing.unit,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
    iconSmall: {
        fontSize: 20,
    },
});
    
class SubmitButton extends React.Component {

        constructor(...props) {
            super(...props)

            this.state = {

                form: {
                    email: this.props.email ,
                    password: this.props.password 
                }

            }
            this.handleOnClick = this.handleOnClick.bind(this)
            this.handleOnMouseOver = this.handleOnMouseOver.bind(this)
        
        }
    handleOnClick(){

        this.props.handleOnClick(this.state.form)       
    }

    handleOnMouseOver() {

    console.log("OnMouseOver")

        this.setState({

            form: {
                email: this.props.email,
                password: this.props.password
            }
        })

    }

    render(){
            const { classes } = this.props;
        return (
            <div>

                <Button onMouseOver={this.handleOnMouseOver} onClick={this.handleOnClick} variant="contained" color="primary" className={classes.button}>
                    Send
                    <SendIcon className={classes.rightIcon}/>
                </Button>

            </div>
        )
    }   
}

SubmitButton.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SubmitButton);