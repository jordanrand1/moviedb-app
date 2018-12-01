import React from 'react';
import axios from 'axios';
import {
  Image,
  Jumbotron,
} from 'react-bootstrap'

class PersonView extends React.Component{

  state = {
  data: {}
  }

  componentDidMount() {
    const key = process.env.REACT_APP_API_KEY
    const URL = `https://api.themoviedb.org/3/person/${this.props.match.params.id}?api_key=${key}`
    axios.get(URL)
      .then( res => this.setState({
        data: res.data
      })
    )
    this.render()
  }

  render() {
    const {
      name,
      birthday,
      biography,
      profile_path
    } = this.state.data
    return(
      <>
        <Jumbotron>
          <h1>{name} {birthday} </h1>
          <div style={{display: 'flex', justifyContent: 'center', textAlign: 'center', marginRight: '1em'}}>
          <Image  src={`https://image.tmdb.org/t/p/w500/${profile_path}`} alt="Picture of Person" />
          <p>{biography}</p>
          </div>
        </Jumbotron>
      </>
    )
  }
}

export default PersonView;
