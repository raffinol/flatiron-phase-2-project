import React, { useState, useEffect } from 'react';
import { Switch, Router } from 'react-router-dom';
import PatientsList from './components/PatientsList';
import NewPatient from './components/NewPatient';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/patients')
      .then((r) => r.json())
      .then((patientsData) => setPatients(patientsData));
  }, []);

  const onAddPatient = (newPatient) => {
    setPatients([...patients, newPatient]);
  };

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <PatientsList patients={patients} />
        </Route>
        <Route exact path="/NewPatient">
          <NewPatient onAddPatient={onAddPatient} />
        </Route>
        <Route path="*">
          <h1>404 not found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
