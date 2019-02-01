import React from 'react';
import { Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '70%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    margin: 'auto',
    height: '75vh'
  },
  table: {
    minWidth: 700,
  },
  button: {
    margin: theme.spacing.unit,
  },
});

class BlockTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hash: '',
      isRedirect: false
    }
  }
  

  viewBlockInfo = (hash) => () => {
    this.setState({ isRedirect: true, hash });
  }

  render() {
    const { classes, blockList } = this.props;
    if (this.state.isRedirect) {
      return <Redirect to={`/blockInformation/${this.state.hash}`} push/>
    }

    return (
      <React.Fragment>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Block Height</TableCell>
                <TableCell>Block Time</TableCell>
                <TableCell>Block Hash</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {blockList.map(row => (
                <TableRow>
                  <TableCell><a href="javascript:void(0)" onClick={this.viewBlockInfo(row.hash)} >{row.height}</a></TableCell>
                  <TableCell>{row.time}</TableCell>
                  <TableCell>{row.hash}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
        
      </React.Fragment>
    );
  }
}
export default withStyles(styles)(BlockTable);