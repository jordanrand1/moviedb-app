import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import People from './People';
import TvShow from './TvShow';
import Movie from './Movie';
import Navbar from './Navbar';
import DetailedView from './DetailedView';
import PersonView from './PersonView';
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
            <Route exact path='/person/:id' component={PersonView} />
            <Route exact path='/people'  component={People} />
            <Route exact path='/tvshow'  component={TvShow} />
            <Route exact path='/movies'  component={Movie} />
          </Switch>
        </>
      </Router>
    )
  }
}

export default App;
