import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from './Home';
import { Navbar } from './Navbar';
import '../App.css';

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route path='' exact omponent={Home} />
        </Switch>
      </>
    )
  }
}

export default App;
