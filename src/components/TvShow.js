import React, { Component } from 'react';
import axios from 'axios';
import {
  Grid,
  Col,
  Thumbnail,
  Row,
 } from 'react-bootstrap';

const key = process.env.REACT_APP_API_KEY
const BASE_URL = `https://api.themoviedb.org/3/trending/tv/week?api_key=${key}`

class TvShow extends Component {
  state = {
    data: { results: [] }
  }

  componentDidMount() {
    axios.get(BASE_URL)
      .then( res => this.setState({
        data: res.data
      })
    )
  }

  render() {
    const { results } = this.state.data
    return (
      <>
        <Grid>
          { results.map(show =>
          <Col xs={6} md={4}>
            <Thumbnail src={`https://image.tmdb.org/t/p/w500${show.poster_path}`} alt="242x200 trending TV Show">
              <h3>{show.name}</h3>
            </Thumbnail>
          </Col>
          )}
        </Grid>
      </>
    )
  }
}

export default TvShow;