import React from 'react';

function DeletePatient({ id, patients, setPatients }) {
  function handleDeleteClick() {
    fetch(`http://localhost:3000/patients/${id}`, {
      method: 'DELETE',
    })
      .then((r) => r.json())
      .then(() => {
        const updatedPatients = patients.filter((p) => p.id !== id);
        setPatients(updatedPatients);
      });
  }
  return (
    <div>
      <button onClick={handleDeleteClick}>Delete Patient</button>
    </div>
  );
}

export default DeletePatient;
