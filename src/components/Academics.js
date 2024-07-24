// src/components/Academics.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaBook, FaChalkboardTeacher, FaMicroscope } from 'react-icons/fa';

const curriculum = [
  {
    level: 'Primary',
    subjects: ['Math', 'Science', 'English', 'Social Studies'],
    methodology: 'Activity-based learning with interactive sessions.',
    icon: <FaBook />,
  },
  {
    level: 'Secondary',
    subjects: ['Math', 'Science', 'English', 'History', 'Geography'],
    methodology: 'Focus on concept clarity and practical applications.',
    icon: <FaChalkboardTeacher />,
  },
  {
    level: 'Senior Secondary',
    subjects: ['Math', 'Physics', 'Chemistry', 'Biology', 'Computer Science'],
    methodology: 'Advanced learning with specialized resources.',
    icon: <FaMicroscope />,
  },
];

const Academics = () => {
  return (
    <Container className="mt-5">
      <Row className="text-center mb-5">
        <Col>
          <h1>Academics</h1>
          <p className="lead">Explore our comprehensive curriculum and teaching methodologies.</p>
        </Col>
      </Row>

      <Row>
        {curriculum.map((course, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="h-100">
              <Card.Body>
                <div className="text-center mb-3">
                  <Card.Title className="h2">{course.icon}</Card.Title>
                  <Card.Title>{course.level}</Card.Title>
                </div>
                <Card.Text>
                  <strong>Subjects:</strong> {course.subjects.join(', ')}
                </Card.Text>
                <Card.Text>
                  <strong>Teaching Methodology:</strong> {course.methodology}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Academics;
