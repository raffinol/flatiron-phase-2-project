import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function NavBar() {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Nav className="me-auto">
        <Nav.Link exact href="/">
          Patients List
        </Nav.Link>
        <Nav.Link href="/NewPatient">New Patient</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default NavBar;
