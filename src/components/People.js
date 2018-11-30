import React from 'react';
import axios from 'axios';
import {
  Grid,
  Col,
  Thumbnail,
} from 'react-bootstrap';

const key = process.env.REACT_APP_API_KEY
const BASE_URL = `https://api.themoviedb.org/3/trending/person/week?api_key=${key}`

class People extends React.Component {

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
        { results.map(r =>
        <Col xs={6} md={4}>
          <Thumbnail src={`https://image.tmdb.org/t/p/w500${r.profile_path}`} alt="242x200 trending person">
            <h3>{r.name}</h3>
            <p>{r.known_for_department}</p>
          </Thumbnail>
        </Col>
        )}
    </Grid>
      </>
    )
  }
}

export default People;