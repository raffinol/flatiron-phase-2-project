import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function NewPatient(props) {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    previousAppointment: '',
    nextAppointment: '',
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
    const formDataUpdated = {
      name: formData.name,
      age: formData.age,
      previousAppointment: formData.previousAppointment,
      nextAppointment: formData.nextAppointment,
    };
    fetch('http://localhost:3000/patients', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formDataUpdated),
    })
      .then((r) => r.json())
      .then((patientData) => props.onAddPatient(patientData));
    history.push('/');
  }

  return (
    <section>
      <h3>New Patient</h3>
      <form onSubmit={handleSubmit}>
        <label>
          name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          age:
          <input type="number" name="age" value={formData.age} onChange={handleChange} />
        </label>
        <label>
          Previous Appointment:
          <input type="text" name="previousAppointment" value={formData.previousAppointment} onChange={handleChange} />
        </label>
        <label>
          Next Appointment:
          <input type="text" name="nextAppointment" value={formData.nextAppointment} onChange={handleChange} />
        </label>
        <button type="submit">Add Patient</button>
      </form>
    </section>
  );
}

export default NewPatient;
