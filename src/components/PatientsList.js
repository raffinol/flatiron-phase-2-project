import React, { useState } from 'react';
import PatientInfo from './PatientInfo';

function PatientsList({ patients, setPatients }) {
  const [patient, setPatient] = useState('');

  const patientsMap = patients.map((patient) => (
    <li onClick={() => setPatient(patient)} key={patient.id}>
      {patient.name}
    </li>
  ));
  console.log(patient);
  return (
    <div>
      <h3>Patients</h3>
      {patientsMap}
      {patient.length !== 0 && patient.name !== '' ? (
        <PatientInfo patient={patient} setPatient={setPatient} patients={patients} setPatients={setPatients} />
      ) : null}
    </div>
  );
}

export default PatientsList;
