import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Container, Navbar, Nav} from 'react-bootstrap'

/*  Navbar including login and shopping cart
    Navbar from https://react-bootstrap.github.io/components/navbar/ */
const Header = () => {
  return (
    <header>
      <Navbar bg='success' variant='dark' expand='lg' collapseOnSelect>
        <Container>
        <LinkContainer to='/'>
            <Navbar.Brand>Daydreamer</Navbar.Brand>
          </LinkContainer>
          
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              
              <LinkContainer to='/shoppingCart'>
                <Nav.Link>
                  <i className='fas fa-shopping-cart'></i> Shopping Cart
                </Nav.Link>
              </LinkContainer>
              
              <LinkContainer to='/login'>
                <Nav.Link>
                  <i className='fas fa-user'></i> Sign In / Register
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to='/contact'>
                <Nav.Link>
                  <i className='fas fa-address-book'></i> Contact Us
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to='/mission'>
                <Nav.Link>
                  <i className='fas fa-info'></i> Our Mission
                </Nav.Link>
              </LinkContainer>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
export default Header;
