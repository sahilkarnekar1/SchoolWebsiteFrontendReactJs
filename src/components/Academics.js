// src/components/Academics.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaBook, FaChalkboardTeacher, FaMicroscope } from 'react-icons/fa';
import './Academics.css'; // Make sure to create and import this CSS file

const curriculum = [
  {
    level: 'Primary (Grades 1-5)',
    subjects: ['English', 'Mathematics', 'Science', 'Social Studies', 'Art', 'Physical Education'],
    methodology: 'Activity-based learning with interactive sessions.',
    icon: <FaBook />,
  },
  {
    level: 'Secondary (Grades 6-10)',
    subjects: ['English', 'Mathematics', 'Science (Physics, Chemistry, Biology)', 'Social Studies', 'Computer Science', 'Physical Education', 'Art'],
    methodology: 'Focus on concept clarity and practical applications.',
    icon: <FaChalkboardTeacher />,
  },
  {
    level: 'Senior Secondary (Grades 11-12)',
    stream: ['Science Stream', 'Commerce Stream'],
    scienceSubjects: ['Physics', 'Chemistry', 'Biology', 'Mathematics', 'Computer Science', 'English'],
    commerceSubjects: ['Accountancy', 'Business Studies', 'Economics', 'Mathematics', 'English'],
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
                  <strong>Subjects:</strong> {course.subjects ? course.subjects.join(', ') : 'N/A'}
                </Card.Text>
                {course.stream && (
                  <>
                    <Card.Text>
                      <strong>Streams:</strong> {course.stream.join(', ')}
                    </Card.Text>
                    <Card.Text>
                      <strong>Science Subjects:</strong> {course.scienceSubjects.join(', ')}
                    </Card.Text>
                    <Card.Text>
                      <strong>Commerce Subjects:</strong> {course.commerceSubjects.join(', ')}
                    </Card.Text>
                  </>
                )}
                <Card.Text>
                  <strong>Teaching Methodology:</strong> {course.methodology}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Row className="mt-5">
        <Col>
          <Card className="text-center p-4">
            <Card.Body>
              <Card.Title className="h3">Teaching Methodologies</Card.Title>
              <Card.Text>
                We use a blend of traditional and modern teaching techniques to cater to different learning styles.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <Card className="text-center p-4">
            <Card.Body>
              <Card.Title className="h3">Educational Resources</Card.Title>
              <Card.Text>
                Digital classrooms, interactive learning modules, and access to online educational platforms.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Academics;
