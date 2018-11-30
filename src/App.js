import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const key = process.env.REACT_APP_API_KEY
    console.log(key)
    return (
      <p>{key}</p>
    )
  }
}

export default App;
