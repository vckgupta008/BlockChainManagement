import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home/Home';
import BlockList from './components/BlockList/BlockList';
import BlockInformation from './components/BlockInformation/BlockInformation';
import Header from './components/Header/Header';

const App = () => (
  <React.Fragment>
    <Header />
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/blockInformation/:id" component={BlockInformation} />
        <Route path="/blockList" component={BlockList} />
      </div>
    </Router>
  </React.Fragment>
);

export default App;
