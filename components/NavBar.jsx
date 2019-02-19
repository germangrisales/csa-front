import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';



class NavBar extends React.Component {

    constructor(...props) {
        super(...props)
    }
render(){

    const { classes } = this.props;
    return (
            <AppBar position="static">
                <Toolbar>
                
                    <Typography variant="h6" color="inherit"  >
                        News
                    </Typography>
            
                </Toolbar>
            </AppBar>
            
    )
}

}
NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default NavBar;