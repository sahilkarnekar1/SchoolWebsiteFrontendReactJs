// src/components/Admissions.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addForm } from '../redux/slices/admissionsSlice';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { FaFileDownload, FaCalendarAlt } from 'react-icons/fa';

const Admissions = () => {
  const [form, setForm] = useState({ name: '', email: '', date: '' });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addForm(form));
    setForm({ name: '', email: '', date: '' });
  };

  return (
    <Container className="mt-5">
      <Row className="text-center mb-5">
        <Col>
          <h1>Admissions</h1>
          <p className="lead">Join our school community by following the admission process below.</p>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title><FaCalendarAlt /> Important Dates and Deadlines</Card.Title>
              <Card.Text>
                <ul>
                  <li>Admission Form Availability: March 1st</li>
                  <li>Last Date for Submission: March 31st</li>
                  <li>Entrance Test: April 15th</li>
                  <li>Announcement of Results: April 30th</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title><FaFileDownload /> Downloadable Admission Forms</Card.Title>
              <Card.Text>
                <a href="https://cdnbbsr.s3waas.gov.in/s3cf2226ddd41b1a2d0ae51dab54d32c36/uploads/2021/06/2021060441.pdf" className="btn btn-primary" target='blank' download>Download Form</a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Admission Process and Criteria</Card.Title>
              <Card.Text>
                <ul>
                  <li>Step 1: Complete the online application form.</li>
                  <li>Step 2: Submit the required documents at the school office.</li>
                  <li>Step 3: Appear for the entrance exam.</li>
                  <li>Step 4: Admission is based on merit and availability of seats..</li>
                  <li>Step 5: Await the admission decision.</li>
                </ul>
                <p>Criteria: Students are evaluated based on their academic performance, entrance exam scores, and interview (if applicable).</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Application Form</Card.Title>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" name="name" value={form.name} onChange={handleChange} placeholder="Enter your name" required />
                </Form.Group>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" name="email" value={form.email} onChange={handleChange} placeholder="Enter your email" required />
                </Form.Group>
                <Form.Group controlId="formDate">
                  <Form.Label>Date</Form.Label>
                  <Form.Control type="date" name="date" value={form.date} onChange={handleChange} required />
                </Form.Group>
                <Button variant="primary" type="submit" className="mt-3">Submit</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Admissions;
