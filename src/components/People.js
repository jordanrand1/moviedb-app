import React from 'react';
import axios from 'axios';
import Blank_Avatar from '../Images/Blank_Avatar.png';
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

  nullPicture = () => {
    const { results } = this.state.data 
      return results.map(r => { 
        if (r.profile_path !== null) {
          return(
            <Col xs={6} md={4}>
              <Thumbnail style={{height: "47em"}} src={`https://image.tmdb.org/t/p/w500/${r.profile_path}`} responsive alt="trending person">
                <h3>{r.name}</h3>
                <p>{r.known_for_department}</p>
              </Thumbnail>
            </Col>
            )
          } else {
            return(
              <Col xs={6} md={4}>
                <Thumbnail style={{height: "47em"}} src={Blank_Avatar} responsive alt="trending person">
                  <h3>{r.name}</h3>
                  <p>{r.known_for_department}</p>
                </Thumbnail>
              </Col>
              )
            }
          })
        }

  render() {
    return (
      <>
        <Grid>
          {this.nullPicture()}
        </Grid>
      </>
    )
  }
}

export default People;