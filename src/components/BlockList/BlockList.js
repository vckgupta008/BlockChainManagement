import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import BlockTable from '../Home/BlockTable/BlockTable';
import { getBlockList } from '../../helpers/Services';

export default class BlockList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blockList: []
    }
  }

  componentDidMount() {
    const getList = getBlockList();
    getList.then(result => {
      this.setState({
        blockList: JSON.parse(result.data.data.body).blocks,
      });
      console.log(result);
    })
      .catch(error => {
        console.log("Error Occured", error);
      })
  }

  render() {
    return (
      <div>
        <Link to='/'>
          <Button color="primary">
            Back to Home
          </Button>
        </Link>
        <BlockTable blockList={this.state.blockList} />
      </div>
    );
  }
}