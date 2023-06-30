import React, { useState } from 'react';
import PatientInfo from './PatientInfo';

function PatientsList({ patients, setPatients }) {
  console.log(patients);
  const [patient, setPatient] = useState('');

  const patientsMap = patients.map((patient) => (
    <li onClick={() => setPatient(patient)} key={patient.id}>
      {patient.name}
    </li>
  ));
  return (
    <div>
      <h3>Patients</h3>
      {patientsMap}
      <PatientInfo patient={patient} patients={patients} setPatients={setPatients} />
    </div>
  );
}

export default PatientsList;
