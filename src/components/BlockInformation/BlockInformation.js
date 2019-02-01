import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { getBlockInfo } from './../../helpers/Services';

export default class BlockInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blockInfo: null,
      isLoading: true
    }
  }

  componentDidMount() {
    const fetchBlockInfo = getBlockInfo(this.props.match.params.id);
    fetchBlockInfo.then(rsp => {
      console.log(JSON.parse(rsp.data.data.body));
      this.setState({ blockInfo: JSON.parse(rsp.data.data.body), isLoading: false })
    }).catch(error => {
      this.setState({ isLoading: false })
      console.log(`ERROR ::: ${error}`);
    });
  }
  render() {
    const { blockInfo, isLoading } = this.state;
    if (isLoading) {
      return (
        <div className="loader"></div>
      );
    }
    return (
      <div>
        <Link to='/'>
          <Button color="primary">
            Back to Home
          </Button>
        </Link>
        {blockInfo ?
          <React.Fragment>
            <Typography variant="h5">
              Block #{blockInfo.height}
            </Typography>
            <table className="table-summary">
              <tr>
                <th>Summary</th>
              </tr>
              <tr>
                <td>Number Of Transactions</td>
                <td>{blockInfo.n_tx}</td>
              </tr>
              <tr>
                <td>Bits</td>
                <td>{blockInfo.bits}</td>
              </tr>
              <tr>
                <td>Height</td>
                <td>{blockInfo.height}</td>
              </tr>
            </table>
            <br/><br/>
            <table className="table-hash">
              <tr>
                <th>Hashes</th>
              </tr>
              <tr>
                <td>Hash</td>
                <td>{blockInfo.hash}</td>
              </tr>
              <tr>
                <td>Previous Block</td>
                <td>{blockInfo.prev_block}</td>
              </tr>
              <tr>
                <td>Next Block(s)</td>
                <td>{blockInfo.next_block[0]}</td>
              </tr>
              <tr>
                <td>Merkle Root</td>
                <td>{blockInfo.mrkl_root}</td>
              </tr>
            </table>
          </React.Fragment>
          : null}
      </div>
    );
  }
}