import React from 'react';

function DeletePatient({ id, patients, setPatients, setPatient }) {
  function handleDeleteClick() {
    fetch(`http://localhost:3000/patients/${id}`, {
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
      <button onClick={handleDeleteClick}>Delete Patient</button>
    </div>
  );
}

export default DeletePatient;
