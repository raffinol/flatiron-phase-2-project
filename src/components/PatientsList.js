import React from 'react';

function PatientsList({ patients }) {
  console.log(patients);

  const patientsMap = patients.map((patient) => <li>{patient.name}</li>);
  return (
    <div>
      <h3>Patients</h3>
      {patientsMap}
    </div>
  );
}

export default PatientsList;
