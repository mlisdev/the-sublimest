import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap'; 

const NavBar = (props) => {
  let nav = props.user ?
    <Navbar className="bg-light justify-content-between" expand="xl">
    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Brand href="#home">THE SUBLIMEST</Navbar.Brand>
      <Navbar.Text>WELCOME, {props.user.name}</Navbar.Text>
      <Navbar.Toggle />
  <Nav>
  <Navbar.Collapse className="justify-content-end">
      <Nav.Link href='/myreviews'>My Reviews</Nav.Link>
          <Nav.Link href='' onClick={props.handleLogout}>Logout</Nav.Link>
        </Navbar.Collapse>
        </Nav>
    </Navbar>
    :
    <Navbar className="bg-light justify-content-between" expand="xl">
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Brand href="#home">THE SUBLIMEST</Navbar.Brand>
      <Navbar.Toggle />
    <Nav>
    <Navbar.Collapse className="justify-content-end">
      <Nav.Link href='/login' className='NavBar-link'>Login</Nav.Link>
          <Nav.Link href='/signup' className='NavBar-link'>Signup</Nav.Link>
      </Navbar.Collapse>
        </Nav>
      </Navbar>
    ;

  return (
    <div>
      {nav}
    </div>
  );
};

export default NavBar;