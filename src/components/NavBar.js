import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <Link to="/">Patients</Link>
      <Link to="/NewPatient">New Patient</Link>
    </nav>
  );
}

export default NavBar;
