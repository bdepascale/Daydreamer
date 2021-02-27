import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

/*  Navbar including login and shopping cart
    Navbar from https://react-bootstrap.github.io/components/navbar/ */
const Header = () => {
  return (
    <header>
      <Navbar bg='success' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <Navbar.Brand href='/'>Daydreamer</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <Nav.Link href='/shoppingCart'>
                <i className='fas fa-shopping-cart'></i> Shopping Cart
              </Nav.Link>
              <Nav.Link href='/login'>
                <i className='fas fa-user'></i> Sign In / Register
              </Nav.Link>
              <Nav.Link href='/login'>
                <i className='fas fa-contact'></i> Contact Us
              </Nav.Link>
              <Nav.Link href='/login'>
                <i className='fas fa-mission'></i> Our Mission
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
export default Header;
