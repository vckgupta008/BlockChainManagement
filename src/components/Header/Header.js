import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    flexGrow: 1,
  },
  header: {
    height: '65px',
    padding: '17px'
  },
  grow: {
    flexGrow: 1,
  },
};

class Header extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <AppBar position="static" className={classes.header} >
        <Typography variant="h6" color="inherit" className={classes.grow}>
          BlockChain Portal
        </Typography>
      </AppBar>
    )
  }
}

export default withStyles(styles)(Header);