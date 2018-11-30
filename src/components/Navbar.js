import React from 'react';
import { 
  Navbar,
  Nav,
  NavItem,
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component {
  rightNavs = () => {
    const { user, dispatch, history } = this.props
  }
  render() {
    return (
      <Navbar inverse collapseOnSelect fluid style={{marginBottom: '0px'}}>
        <Navbar.Header>
          <Navbar.Brand>
            <NavLink to="/">
            Home
            </NavLink>
         </Navbar.Brand>
         <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
          <NavItem>
            <NavLink eventKey={1} to="/movies">
              Movies
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink eventKey={2} to="/tvshow">
              T.V. Shows
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink pullRight eventKey={3} to="/people">
              People
            </NavLink>
          </NavItem>
          </Nav> 
        <Navbar.Text pullRight>Welcome to the Movies</Navbar.Text>     
        </Navbar.Collapse>  
      </Navbar>
    )
  }
}

export default NavBar