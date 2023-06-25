import React, { useState, useEffect } from 'react';
import PatientsList from './components/PatientsList';
import NewPatient from './components/NewPatient';

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
      <NewPatient onAddPatient={onAddPatient} />
      <PatientsList patients={patients} />
    </div>
  );
}

export default App;
