import React, { Component } from 'react';
import axios from 'axios';
import {
  Grid,
  Col,
  Thumbnail,
 } from 'react-bootstrap';
 import LinesEllipsis from 'react-lines-ellipsis'
 import InfiniteScroll from 'react-infinite-scroller'

const key = process.env.REACT_APP_API_KEY
const BASE_URL = `https://api.themoviedb.org/3/trending/tv/week?api_key=${key}`

class TvShow extends Component {
  state = {
    data: { results: [] }
  }

  componentDidMount() {
    axios.get(BASE_URL)
      .then( res => this.setState({data: res.data})
    )
  }

  render() {
    return (
      <>
      <h1 align="center">Weekly Trending T.V. Shows</h1>
        <Grid>
          { this.state.data.results.map(show =>
          <Col xs={6} md={4}>
            <Thumbnail src={`https://image.tmdb.org/t/p/w500${show.poster_path}`} alt="242x200 trending TV Show" style={{height:"750px"}}>
              <h3>{show.name}</h3>
              <h4>User Scoring: {show.vote_average}/10</h4>
              <h5>Overview:</h5>
              <LinesEllipsis
                text={show.overview}
                maxLine='1'
                ellipsis='...'
                trimRight
                />
            </Thumbnail>
          </Col>
          )}
        </Grid>
      </>
    )
  }
}

export default TvShow;