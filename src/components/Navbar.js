import React from 'react';
import { 
  Navbar,
  Nav,
  NavItem,
} from 'react-bootstrap';

class NavBar extends React.Component {
  rightNavs = () => {
    const { user, dispatch, history } = this.props
  }
  render() {
    return (
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/home">Home</a>
         </Navbar.Brand>
        </Navbar.Header>
        <Nav>
        <NavItem eventKey={1} href="/movies">
          Movies
        </NavItem>
        <NavItem eventKey={2} href="/tvShows">
          T.V. Shows
        </NavItem>
        <NavItem pullRight eventKey={3} href="/people">
          People
        </NavItem>
        </Nav>   
        <Navbar.Text pullRight>Welcome to the Movies</Navbar.Text>     
      </Navbar>
    )
  }
}

export default NavBar