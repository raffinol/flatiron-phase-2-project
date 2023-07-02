import React from 'react';
import DeletePatient from './DeletePatient';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

function PatientInfo({ patient, setPatient, patients, setPatients }) {
  const { id, name, age, previousAppointment, nextAppointment } = patient;
  return (
    <>
      <Stack>
        <h3 className="ms-4 mt-3">Patient Information</h3>
        <p className="p-1 ms-3">Name: {name}</p>
        <p className="p-1 ms-3">Age: {age}</p>
        <p className="p-1 ms-3">Previous Appointment: {previousAppointment}</p>
        <p className="p-1 ms-3">Next Appointment: {nextAppointment}</p>
      </Stack>
      <Stack className="ms-2 mt-2" direction="horizontal" gap={2}>
        <Link
          to={{
            pathname: '/ModifyPatient',
            state: patient,
          }}
        >
          <Button variant="primary">Modify Patient</Button>
        </Link>
        <DeletePatient id={id} patients={patients} setPatients={setPatients} setPatient={setPatient} />
      </Stack>
    </>
  );
}

export default PatientInfo;
