import React from 'react';
import axios from 'axios';
import { Grid, Row, Col, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Home extends React.Component {

  state = {
    movieData: {},
    showData: {},
    peopleData: {},
  }

  componentDidMount() {
    const key = process.env.REACT_APP_API_KEY
    const MOVIE_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US`
    const SHOW_URL = `https://api.themoviedb.org/3/trending/tv/week?api_key=${key}&language=en-US`
    const PEOPLE_URL = `https://api.themoviedb.org/3/trending/person/week?api_key=${key}`

    axios.get(MOVIE_URL)
      .then( res => this.setState({
        movieData: res.data
      })
    )
    axios.get(SHOW_URL)
      .then( res => this.setState({
        showData: res.data
      })
    )
    axios.get(PEOPLE_URL)
      .then( res => this.setState({
        peopleData: res.data
      })
    )
  }

  topFourMovies = () => {
    const { results } = this.state.movieData
    var topFourMovies = []
    if ( results !== undefined) {
      const topNum = 4
      for ( var i = 0; i < topNum; i++ ) {
        topFourMovies.push(
          <Col xs={6} md={3} style={{paddingLeft: '0px', paddingRight: '0px'}}>
            <Link to={`/movie/${results[i].id}`}>
              <div style={{
                width: '100%',
                height: '100vh',
                backgroundImage: `url(https://image.tmdb.org/t/p/w500${results[i].poster_path})`,
                backgroundPositionX: 'center',
                backgroundRepeat: 'none',
              }}>
              </div>
            </Link>
          </Col>
        )
      }
      return topFourMovies
    }
  }

  topFourShows = () => {
    const { results } = this.state.showData
    var topFourShows = []
    
    if ( results !== undefined) {
      const topNum = 4
      for ( var i = 0; i < topNum; i++ ) {
        topFourShows.push(
          <Col xs={6} md={3} style={{paddingLeft: '0px', paddingRight: '0px'}}>
            <Link to={`/tv/${results[i].id}`}>
              <div style={{
                width: '100%',
                height: '100vh',
                backgroundImage: `url(https://image.tmdb.org/t/p/w500${results[i].poster_path})`,
                backgroundPositionX: 'center',
                backgroundRepeat: 'none',
              }}>
              </div>
            </Link>
          </Col>
        )
      }
      return topFourShows
    }
  }

  topFourPeople = () => {
    const { results } = this.state.peopleData
    var topFourPeople = []
    if ( results !== undefined) {
      const topNum = 4
      for ( var i = 0; i < topNum; i++ ) {
        topFourPeople.push(
          <Col xs={6} md={3} style={{paddingLeft: '0px', paddingRight: '0px'}}>
            <Link to={`/people/${results[i].id}`}>
              <div style={{
                width: '100%',
                height: '100vh',
                backgroundImage: `url(https://image.tmdb.org/t/p/w500${results[i].profile_path})`,
                backgroundPositionX: 'center',
                backgroundRepeat: 'none',
              }}>
              </div>
            </Link>
          </Col>
        )
      }
      return topFourPeople
    }
  }

  render() {
    return (
      <>
      <Carousel>
        <Carousel.Item>
          <Grid style={{padding: '0px', margin: '0px', width: '100%'}}>
            <Row className="show-grid">
              {this.topFourMovies()}
            </Row>
          </Grid>
          <Carousel.Caption>
            <h3>Top Movies</h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Grid style={{padding: '0px', margin: '0px', width: '100%'}}>
            <Row className="show-grid">
              {this.topFourShows()}
            </Row>
          </Grid>
          <Carousel.Caption>
            <h3>Top Shows</h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Grid style={{padding: '0px', margin: '0px', width: '100%'}}>
            <Row className="show-grid">
              {this.topFourPeople()}
            </Row>
          </Grid>
          <Carousel.Caption>
            <h3>Top Actors</h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>;
      </>
    )
  }
}

export default Home;