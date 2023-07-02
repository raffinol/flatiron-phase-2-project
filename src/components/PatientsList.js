import React, { useState } from 'react';
import PatientInfo from './PatientInfo';
import ListGroup from 'react-bootstrap/ListGroup';

function PatientsList({ patients, setPatients }) {
  const [patient, setPatient] = useState('');

  const patientsMap = patients.map((patient) => (
    <ListGroup>
      <ListGroup.Item action onClick={() => setPatient(patient)} key={patient.id}>
        {patient.name}
      </ListGroup.Item>
    </ListGroup>
  ));
  console.log(patient);
  return (
    <div>
      <h3 className="ms-4 mt-3">Patients List</h3>
      {patientsMap}
      {patient.length !== 0 && patient.name !== '' ? (
        <PatientInfo patient={patient} setPatient={setPatient} patients={patients} setPatients={setPatients} />
      ) : null}
    </div>
  );
}

export default PatientsList;
