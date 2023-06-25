import React from 'react';

function PatientInfo({ patient }) {
  const { name, age, previousAppointment, nextAppointment } = patient;
  return (
    <div>
      <h3>Patient Info</h3>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Previous Appointment: {previousAppointment}</p>
      <p>Next Appointment: {nextAppointment}</p>
    </div>
  );
}

export default PatientInfo;
