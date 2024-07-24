// src/components/ContactUs.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./ContactUs.css";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const ContactUs = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send to backend or email service)
    console.log(form);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <Container className="mt-5">
      <Row className="text-center mb-4">
        <Col>
          <h1>Contact Us</h1>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col md={4} className="text-center">
          <FaMapMarkerAlt size={30} className="mb-2" />
          <p>123 School St, Education City, ED 45678</p>
        </Col>
        <Col md={4} className="text-center">
          <FaPhoneAlt size={30} className="mb-2" />
          <p>(123) 456-7890</p>
        </Col>
        <Col md={4} className="text-center">
          <FaEnvelope size={30} className="mb-2" />
          <p>info@schoolwebsite.com</p>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col md={6} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Control
              className='inputmarging'
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Name"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
              className='inputmarging'
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
              className='inputmarging'
                as="textarea"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Message"
                rows={4}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" block>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <div className="map-responsive">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509619!2d144.95373531532115!3d-37.81627977975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727f2b6434bc0a!2sSchool!5e0!3m2!1sen!2sus!4v1614798738276!5m2!1sen!2sus"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
