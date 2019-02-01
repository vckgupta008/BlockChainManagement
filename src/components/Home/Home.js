import React from 'react';
import {  Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import BlockTable from './BlockTable/BlockTable';
import TransactionTable from './TransactionTable/TransactionTable';
import { getBlockList } from '../../helpers/Services';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      value:0,
      blockList: []
    }
  }

  componentDidMount() {
    const getList = getBlockList();
    getList.then(result => {
      this.setState({
        blockList: JSON.parse(result.data.data.body).blocks.splice(0, 10),
      });
      console.log(result);
    })
      .catch(error => {
        console.log("Error Occured", error);
      })
  }

  toggleTabs=(event, value)=>{
    this.setState({value});
  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.toggleTabs}>
            <Tab label="Blocks" />
            <Tab label="Transactions" />
          </Tabs>
        </AppBar>
        {value === 0 && 
        <React.Fragment>
          <BlockTable blockList={this.state.blockList} />
          <Link to='/blockList'>
            <Button variant="outlined" color="primary" className={classes.button}>
              View More
            </Button>
          </Link>
        </React.Fragment>
        }
        {value === 1 && <TransactionTable />}
      </div>
    );
  }
}

export default withStyles(styles)(Home);