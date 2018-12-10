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

function SubmitButton(props) {
    const { classes } = props;
    return (
        <div>

            <Button variant="contained" color="primary" className={classes.button}>
                Send
                 <SendIcon className={classes.rightIcon}/>
            </Button>

        </div>
    );
}

SubmitButton.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SubmitButton);