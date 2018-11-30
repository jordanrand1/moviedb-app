import React, { Component } from 'react';
import axios from 'axios';
import {
  Grid,
  Col,
  Thumbnail,
 } from 'react-bootstrap';
 import LinesEllipsis from 'react-lines-ellipsis'
 import { Link } from 'react-router-dom';
 import InfiniteScroll from 'react-infinite-scroller';

class Movie extends Component {
  state = {
    data: { results: [] }, 
    results: [],
    page: 1, 
    totalPages: 0,
  }

  componentDidMount() {
    const key = process.env.REACT_APP_API_KEY
    const BASE_URL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${key}&language=en-US&page=${this.state.page}`
    axios.get(BASE_URL)
      .then( res => this.setState({data: res.data, results: res.data.results, totalPages: res.data.total_pages})
    )
  }

  moreMoviesPlz = () => {
    const newPage = this.state.page + 1
    const key = process.env.REACT_APP_API_KEY
    const BASE_URL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${key}&language=en-US&page=${newPage}`
    axios.get(BASE_URL)
      .then( res => {
        this.setState({
          results: [...this.state.results, ...res.data.results], 
          page: newPage,
        
        })
      })
   }

  render() {
    return (
      <>
      <h1 align="center">Weekly Trending Movies</h1>
        <Grid>
          <InfiniteScroll
          pageStart={0}
          loadMore={() => this.moreMoviesPlz()}
          hasMore={this.state.page < this.state.totalPages} 
          loader={<div className='loader' key={0}>Loading ...</div>}
          >
          { this.state.results.map(show =>
          <Col xs={6} md={4}>
          <Link to={`/movie/${show.id}`}>
            <Thumbnail src={`https://image.tmdb.org/t/p/w500${show.poster_path}`} alt="242x200 trending Movie" style={{height:"750px"}}>
              <h3>{show.title}</h3>
              <h4>User Scoring: {show.vote_average}/10</h4>
              <h5>Overview:</h5>
              <LinesEllipsis
                text={show.overview}
                maxLine='1'
                ellipsis='...'
                trimRight
                />
            </Thumbnail>
            </Link>
          </Col>
          )}
          </InfiniteScroll>
        </Grid>
      </>
    )
  }
}

export default Movie;
