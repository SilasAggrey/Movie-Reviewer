import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

function Header() {
  return (
    <>
      <Navbar bg="primary" variant="blue" className='mb-3'>
        <Container>
          <Navbar.Brand href="#home" className='text-white mx-auto'>Movie Reviews</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;