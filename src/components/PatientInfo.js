import React from 'react';
import DeletePatient from './DeletePatient';

function PatientInfo({ patient, patients, setPatients }) {
  const { id, name, age, previousAppointment, nextAppointment } = patient;
  return (
    <div>
      <h3>Patient Info</h3>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Previous Appointment: {previousAppointment}</p>
      <p>Next Appointment: {nextAppointment}</p>
      <DeletePatient id={id} patients={patients} setPatients={setPatients} />
    </div>
  );
}

export default PatientInfo;
