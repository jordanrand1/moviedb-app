import React from 'react';
import axios from 'axios';
import LinesEllipis from 'react-lines-ellipsis'
import avatar_blank_tall from '../Images/avatar_blank_tall.png';
import {
  Grid,
  Col,
  Thumbnail,
  Image
} from 'react-bootstrap';
import InfiniteScroll from 'react-infinite-scroller';


class People extends React.Component {
  
  state = {
    data: { results: [] },
    results: [],
    page: 1, 
    totalPages: 0,
  }
  
  componentDidMount() {
    const key = process.env.REACT_APP_API_KEY
    const BASE_URL = `https://api.themoviedb.org/3/trending/person/week?api_key=${key}&page=${this.state.page}`
    axios.get(BASE_URL)
      .then( res => this.setState({
        data: res.data, results: res.data.results, totalPages: res.data.total_pages})
    )
  }

  morePeople = () => {
    const newPage = this.state.page + 1
    const key = process.env.REACT_APP_API_KEY
    const BASE_URL = `https://api.themoviedb.org/3/trending/person/week?api_key=${key}&page=${newPage}`
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
        <Grid>
          <InfiniteScroll
            pageStart={0}
            loadMore={() => this.morePeople()}
            hasMore={this.state.page < this.state.totalPages} 
            loader={<div className='loader' key={0}>Loading ...</div>}
            >
        { 
          this.state.results.map(r => { 
          if (r.profile_path !== null) {
            return(
              <Col xs={6} md={4}>
                <Thumbnail style={{height: "45em"}} src={`https://image.tmdb.org/t/p/w500/${r.profile_path}`} responsive alt="trending person">
                  <h3>{r.name}</h3>
                  <p>Known For {r.known_for_department}</p>
                  <p>Known Work {r.known_for[0].original_title}</p>
                </Thumbnail>
              </Col>
              )
            } else {
              return(
                <Col xs={6} md={4}>
                  <Thumbnail style={{height: "45em"}} responsive>
                    <Image style={{height: "36em", width: "23em"}} src={avatar_blank_tall} alt="Trending Person"/>
                    <h3>{r.name}</h3>
                    <p>Known For {r.known_for_department}</p>
                    <p>Known Work {r.known_for[0].original_title}</p>
                  </Thumbnail>
                </Col>
                )
              }
            })
          }
          </InfiniteScroll>
        </Grid>
      </>
    )
  }
}

export default People;