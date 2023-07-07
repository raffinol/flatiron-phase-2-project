import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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
    fetch(`${process.env.REACT_APP_API_URL}/patients/`, {
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
    <>
      <h3 className="ms-4 mt-3">New Patient</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 ms-4" controlId="formBasic">
          <Form.Label>
            name:
            <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} />
          </Form.Label>
        </Form.Group>
        <Form.Group className="mb-3 ms-4" controlId="formBasic">
          <Form.Label>
            age:
            <Form.Control type="number" name="age" value={formData.age} onChange={handleChange} />
          </Form.Label>
        </Form.Group>
        <Form.Group className="mb-3 ms-4" controlId="formBasic">
          <Form.Label>
            Previous Appointment:
            <Form.Control
              type="text"
              name="previousAppointment"
              value={formData.previousAppointment}
              onChange={handleChange}
            />
          </Form.Label>
        </Form.Group>
        <Form.Group className="mb-3 ms-4" controlId="formBasic">
          <Form.Label>
            Next Appointment:
            <Form.Control type="text" name="nextAppointment" value={formData.nextAppointment} onChange={handleChange} />
          </Form.Label>
        </Form.Group>
        <Button className="ms-3" type="submit" variant="primary">
          Add Patient
        </Button>
      </Form>
    </>
  );
}

export default NewPatient;
