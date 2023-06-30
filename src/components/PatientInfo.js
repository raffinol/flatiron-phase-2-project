import React from 'react';
import DeletePatient from './DeletePatient';
import { Link } from 'react-router-dom';

function PatientInfo({ patient, setPatient, patients, setPatients }) {
  const { id, name, age, previousAppointment, nextAppointment } = patient;
  return (
    <div>
      <h3>Patient Info</h3>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Previous Appointment: {previousAppointment}</p>
      <p>Next Appointment: {nextAppointment}</p>
      <DeletePatient id={id} patients={patients} setPatients={setPatients} setPatient={setPatient} />
      <Link
        to={{
          pathname: '/ModifyPatient',
          state: patient,
        }}
      >
        <button>Modify Patient</button>
      </Link>
    </div>
  );
}

export default PatientInfo;
