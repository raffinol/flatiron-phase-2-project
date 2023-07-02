import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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
      <br />
      <h3 className="ms-4 mt-2">Modify Patient</h3>
      <Form onSubmit={handleUpdate}>
        <Form.Group className="mb-3 ms-4" controlId="formBasic">
          <Form.Label>
            name:
            <Form.Control type="text" name="name" defaultValue={patient.name} onChange={handleChange} />
          </Form.Label>
        </Form.Group>
        <Form.Group className="mb-3 ms-4" controlId="formBasic">
          <Form.Label>
            age:
            <Form.Control type="number" name="age" defaultValue={patient.age} onChange={handleChange} />
          </Form.Label>
        </Form.Group>
        <Form.Group className="mb-3 ms-4" controlId="formBasic">
          <Form.Label>
            Previous Appointment:
            <Form.Control
              type="text"
              name="previousAppointment"
              defaultValue={patient.previousAppointment}
              onChange={handleChange}
            />
          </Form.Label>
        </Form.Group>
        <Form.Group className="mb-3 ms-4" controlId="formBasic">
          <Form.Label>
            Next Appointment:
            <Form.Control
              type="text"
              name="nextAppointment"
              defaultValue={patient.nextAppointment}
              onChange={handleChange}
            />
          </Form.Label>
        </Form.Group>
        <Button className="ms-3" type="submit" variant="primary">
          Modify
        </Button>
      </Form>
    </section>
  );
}

export default ModifyPatient;
