import React, { Component } from 'react';
import axios from 'axios';

const key = process.env.REACT_APP_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3/trending/all/day?api_key=${key}'

class TvShow extends Component {
  state = {
    data: {}
  }

  componentDidMount() {
    axios.get(BASE_URL)
      .then( res => this.setState({
        data: res.data
      })
    )
  }
  
  render() {
    return (
        <>
          <h1>Testing Tv Shows</h1>
        </>
    );
  }
}

export default TvShow;