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
          <p>Our principal's message goes here. At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.</p>
        </Col>
      </Row>

      <Row className="align-items-center mb-5">
        <Col md={6} className="order-md-2 mb-3 mb-md-0">
          <Image src="https://www.aiib.org/en/news-events/annual-report/2020/home/img/500x500/our-corporate-strategy.jpg" rounded fluid />
        </Col>
        <Col md={6} className="order-md-1">
          <h2><FaBuilding /> Infrastructure and Facilities</h2>
         <ul> 
           <li> State-of-the-art science and computer labs</li>
<li>Spacious and well-equipped classrooms</li>
<li>Library with a vast collection of books and digital resources</li>
<li>Sports facilities including a playground, gymnasium, and swimming pool</li>
</ul>
        </Col>
      </Row>

      <Row className="align-items-center mb-5">
        <Col md={6} className="mb-3 mb-md-0">
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtXlHin27VGEzIzepHOrVglusgChmTIK-yuA&s" rounded fluid />
        </Col>
        <Col md={6}>
          <h2><FaSchool /> Our History, Vision, Mission, and Values</h2>
          <p>History: "Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.</p>
          <p>Vision: To create a learning environment that fosters academic excellence, critical thinking, and ethical values.</p>
          <p>Mission: "To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
