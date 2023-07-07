import React from 'react';
import Button from 'react-bootstrap/Button';

function DeletePatient({ id, patients, setPatients, setPatient }) {
  function handleDeleteClick() {
    fetch(`${process.env.REACT_APP_API_URL}/patients/${id}`, {
      method: 'DELETE',
    })
      .then((r) => r.json())
      .then(() => {
        const updatedPatients = patients.filter((p) => p.id !== id);
        setPatients(updatedPatients);
      });
    setPatient({ name: '', age: '', previousAppointment: '', nextAppointment: '' });
  }
  return (
    <div>
      <Button variant="primary" onClick={handleDeleteClick}>
        Delete Patient
      </Button>
    </div>
  );
}

export default DeletePatient;
