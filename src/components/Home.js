import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-bootstrap';


const key = process.env.REACT_APP_API_KEY
const URL = `https://api.themoviedb.org/3/trending/all/week?api_key=${key}`

const Hero = styled.div`
  height = 100vh;
  width = 100%;
`

class Home extends React.Component {

  state = {
    data: {}
  }

  componentDidMount() {
    axios.get(URL)
      .then( res => this.setState({
        data: res.data
      })
    )
  }

  topFour = () => {
    const { results } = this.state.data
    var topFourMovies = []
    if ( results !== undefined) {
      const topNum = 4
      for ( var i = 0; i < topNum; i++ ) {
        console.log(`https://image.tmdb.org/t/p/w500${results[i].poster_path}`)
        topFourMovies.push(
          <Col xs={6} md={3} style={{paddingLeft: '0px', paddingRight: '0px'}}>
            <div style={{
              width: '100%',
              height: '100vh',
              backgroundImage: `url(https://image.tmdb.org/t/p/w500${results[i].poster_path})`,
              backgroundPositionX: 'center',
            }}>
            </div>
          </Col>
        )
      }
      return topFourMovies
    }
  }

  render() {
    return (
      <>
        <Grid style={{padding: '0px', margin: '0px', width: '100%'}}>
          <Row className="show-grid">
            {this.topFour()}
          </Row>
        </Grid>
      </>
    )
  }
}

export default Home;