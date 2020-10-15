import React from 'react';
import './Header.css';
import HeroImage from '../HeroImage/HeroImage'
import {
  Navbar,
  Nav, 
  Alert
} from 'react-bootstrap'; 

const NavBar = (props) => {
  let header = props.user ?
    <>
      <Navbar className="bar justify-content-between" expand="xl">
              <Navbar.Text className="h3">WELCOME, {props.user.name}</Navbar.Text>
      <Navbar />
        <Nav>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" >
            <Nav className="mr-auto">
            <Nav.Link href='/myreviews'>My Reviews</Nav.Link>
            <Nav.Link href='/about'>About Sublimest</Nav.Link>
              <Nav.Link href='' onClick={props.handleLogout}>Logout</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Nav>
        </Navbar>
      <HeroImage />
      </>
    :
    <>
    <Navbar className="bar justify-content-between" expand="xl">
      <Navbar.Brand href="#home">THE SUBLIMEST</Navbar.Brand>
       <Navbar />
        <Nav>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
      <Nav.Link href='/login' className='NavBar-link'>Login</Nav.Link>
          <Nav.Link href='/signup' className='NavBar-link'>Signup</Nav.Link>
      </Navbar.Collapse>
        </Nav>
    </Navbar>
      <HeroImage />
                <Alert variant="success">
            <Alert.Heading>Welcome to The Sublimest! </Alert.Heading>
            <p>
             Please Login or Signup!
            </p>
</Alert>
      </>
    ;
    
  return (
    <div>
      {header}
    </div>
  );
};

export default NavBar;