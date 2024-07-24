// src/components/Students.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaFlask, FaPalette, FaTrophy, FaUsers } from 'react-icons/fa';

const activities = [
  {
    name: 'Science Club',
    description: 'Explore the world of science with fun experiments and projects.',
    icon: <FaFlask />,
  },
  {
    name: 'Art Club',
    description: 'Express your creativity through various forms of art.',
    icon: <FaPalette />,
  },
  // Add more activities as needed
];

const achievements = [
  {
    title: 'Math Olympiad Winner',
    description: 'Our student won the national math olympiad.',
    icon: <FaTrophy />,
  },
  {
    title: 'Science Fair Champion',
    description: 'First place in the state science fair.',
    icon: <FaTrophy />,
  },
  // Add more achievements as needed
];

const Students = () => {
  return (
    <Container className="mt-5">
      <Row className="text-center mb-5">
        <Col>
          <h1>Student Life</h1>
          <p className="lead">Discover the vibrant life of our students.</p>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col>
          <h2>Extracurricular Activities</h2>
        </Col>
      </Row>
      <Row>
        {activities.map((activity, index) => (
          <Col md={4} sm={6} key={index} className="mb-4">
            <Card className="h-100">
              <Card.Body>
                <Card.Title className="d-flex align-items-center">
                  {activity.icon} <span className="ml-2">{activity.name}</span>
                </Card.Title>
                <Card.Text>{activity.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Row className="mb-5">
        <Col>
          <h2>Achievements</h2>
        </Col>
      </Row>
      <Row>
        {achievements.map((achievement, index) => (
          <Col md={4} sm={6} key={index} className="mb-4">
            <Card className="h-100">
              <Card.Body>
                <Card.Title className="d-flex align-items-center">
                  {achievement.icon} <span className="ml-2">{achievement.title}</span>
                </Card.Title>
                <Card.Text>{achievement.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Row className="mb-5">
        <Col>
          <h2>Student Council</h2>
          <Card>
            <Card.Body>
              <Card.Title className="d-flex align-items-center">
                <FaUsers /> <span className="ml-2">Join our Student Council</span>
              </Card.Title>
              <Card.Text>
                Develop leadership skills and represent your peers in our student council.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Students;
