import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import People from './People';
import TvShow from './TvShow';
import Navbar from './Navbar';
import DetailedView from './DetailedView';
import '../App.css';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Navbar />
          <Switch>
            <Route exact path='/'  component={Home} />
            <Route exact path='/movie/:id'  component={DetailedView} />
            <Route exact path='/tv/:id'  component={DetailedView} />
            <Route exact path='/people'  component={People} />
            <Route exact path='/tvshow'  component={TvShow} />
          </Switch>
        </>
      </Router>
    )
  }
}

export default App;
