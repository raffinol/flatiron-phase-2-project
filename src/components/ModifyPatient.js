import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

function ModifyPatient({ patients, setPatients }) {
  const location = useLocation();
  const patient = location.state;
  const id = patient.id;
  console.log(location.state);

  const [formData, setFormData] = useState({
    name: patient.name,
    age: patient.age,
    previousAppointment: patient.previousAppointment,
    nextAppointment: patient.nextAppointment,
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  const history = useHistory();

  function handleUpdate(event) {
    event.preventDefault();
    const formDataUpdated = {
      name: formData.name,
      age: formData.age,
      previousAppointment: formData.previousAppointment,
      nextAppointment: formData.nextAppointment,
    };
    fetch(`http://localhost:3000/patients/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formDataUpdated),
    })
      .then((r) => r.json())
      .then((updatedPatient) => {
        const updatedPatients = patients.map((patient) => {
          if (patient.id === id) return updatedPatient;
          return patient;
        });
        setPatients(updatedPatients);
      });
    history.push('/');
  }

  return (
    <section>
      <h3>Modify Patient</h3>
      <form onSubmit={handleUpdate}>
        <label>
          name:
          <input type="text" name="name" defaultValue={patient.name} onChange={handleChange} />
        </label>
        <label>
          age:
          <input type="number" name="age" defaultValue={patient.age} onChange={handleChange} />
        </label>
        <label>
          Previous Appointment:
          <input
            type="text"
            name="previousAppointment"
            defaultValue={patient.previousAppointment}
            onChange={handleChange}
          />
        </label>
        <label>
          Next Appointment:
          <input type="text" name="nextAppointment" defaultValue={patient.nextAppointment} onChange={handleChange} />
        </label>
        <button type="submit">Modify</button>
      </form>
    </section>
  );
}

export default ModifyPatient;
