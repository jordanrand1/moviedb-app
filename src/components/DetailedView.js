import React from 'react';
import axios from 'axios';
import { Media } from 'react-bootstrap';
import styled from 'styled-components';

const Container = styled.div`
  width: 85%;
  margin: auto;
  color: white;
`

const Background = styled.div`
  background-color: #101010;
  padding-top: 50px;
`

class DetailedView extends React.Component {

  state = {
    data: {},
    type: this.props.match.path.split("/")[1]
  }

  componentDidMount() {
    const key = process.env.REACT_APP_API_KEY
    const URL = `https://api.themoviedb.org/3/${this.state.type}/${this.props.match.params.id}?api_key=${key}`
    axios.get(URL)
      .then( res => this.setState({
        data: res.data
      })
    )
    this.render()
  }

  render() {
    const { type } = this.state
    const { 
      poster_path, 
      overview, 
      title, 
      vote_average,
      release_date,
      revenue,
      name,
      first_air_date,
      popularity,
    } = this.state.data
    return (
      <Background>
        <Container>
          <Media>
            <Media.Left>
              <div style={{
                width: '200px',
                height: '300px',
                backgroundImage: `url(https://image.tmdb.org/t/p/w200${poster_path})`,
              }}>
              </div>
            </Media.Left>
            <Media.Body style={{paddingLeft: '10px'}}>
              <h1>{ type === 'movie' ? title : name } - Rating: { vote_average }/10</h1>
              <p style={{fontSize: '14px'}}>Release: { type === 'movie' ? release_date : first_air_date } | Revenue: ${revenue}</p>
              <p style={{fontSize: '20px'}}>{overview}</p>
            </Media.Body>
          </Media>
        </Container>
      </Background>
    )
  }
}

export default DetailedView;