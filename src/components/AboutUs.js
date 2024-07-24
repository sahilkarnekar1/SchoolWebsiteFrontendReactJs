// src/components/AboutUs.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FaSchool, FaChalkboardTeacher, FaBuilding } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <Container className="mt-5">
      <Row className="text-center mb-5">
        <Col>
          <h1>About Us</h1>
          <p className="lead">Welcome to our school. Here is our history, vision, mission, and values.</p>
        </Col>
      </Row>

      <Row className="align-items-center mb-5">
        <Col md={6} className="mb-3 mb-md-0">
          <Image src="https://newindianationalschool.in/wp-content/uploads/2023/04/WhatsApp-Image-2023-04-12-at-4.42.03-PM-500x500.jpeg" rounded fluid />
        </Col>
        <Col md={6}>
          <h2><FaChalkboardTeacher /> Message from the Principal</h2>
          <p>Our principal's message goes here. It inspires and motivates the students and staff to strive for excellence.</p>
        </Col>
      </Row>

      <Row className="align-items-center mb-5">
        <Col md={6} className="order-md-2 mb-3 mb-md-0">
          <Image src="https://www.aiib.org/en/news-events/annual-report/2020/home/img/500x500/our-corporate-strategy.jpg" rounded fluid />
        </Col>
        <Col md={6} className="order-md-1">
          <h2><FaBuilding /> Infrastructure and Facilities</h2>
          <p>Details about the school's infrastructure and facilities. Our school is equipped with state-of-the-art facilities to provide the best learning environment for our students.</p>
        </Col>
      </Row>

      <Row className="align-items-center mb-5">
        <Col md={6} className="mb-3 mb-md-0">
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtXlHin27VGEzIzepHOrVglusgChmTIK-yuA&s" rounded fluid />
        </Col>
        <Col md={6}>
          <h2><FaSchool /> Our History, Vision, Mission, and Values</h2>
          <p>Our school has a rich history of academic excellence. Our vision is to create future leaders, our mission is to provide quality education, and our values include integrity, respect, and responsibility.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
