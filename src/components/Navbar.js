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
        <NavItem eventKey={1} href="/trending">
          Trending
        </NavItem>
        <NavItem eventKey={2} href="/genres">
          Genres
        </NavItem>
        </Nav>        
        <Nav pullRight>
        <NavItem pullRight eventKey={3} href="/something">
          Something
        </NavItem>
        </Nav>
      </Navbar>
    )
  }
}

export default NavBar