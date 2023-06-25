import React, { useState, useEffect } from 'react';
import PatientsList from './components/PatientsList';

function App() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/patients')
      .then((r) => r.json())
      // .then((r) => console.log(r));
      .then((patientsData) => setPatients(patientsData));
  }, []);

  return (
    <div className="App">
      <PatientsList patients={patients} />
    </div>
  );
}

export default App;
