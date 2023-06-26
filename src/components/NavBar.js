import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <NavLink exact to="/">
        Patients
      </NavLink>
      <NavLink to="/NewPatient">New Patient</NavLink>
    </nav>
  );
}

export default NavBar;
