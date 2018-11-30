import React from 'react';
import axios from 'axios';

const key = process.env.REACT_APP_API_KEY
const BASE_URL = `https://api.themoviedb.org/3/trending/person/week?api_key=${key}`

class People extends React.Component {

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
      </>
    )
  }
}

export default People;