// src/components/Faculty.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaChalkboardTeacher, FaGraduationCap, FaStar } from 'react-icons/fa';

const facultyMembers = [
  {
    name: 'Virat Kohli',
    position: 'Principal',
    qualifications: 'PhD in Cricket',
    experience: '20 years',
    image: 'https://documents.iplt20.com/ipl/IPLHeadshot2024/2.png', // Placeholder image
  },
  {
    name: 'Rohit Sharma',
    position: 'Vice Principal',
    qualifications: 'M.Ed. in Cricket',
    experience: '15 years',
    image: 'https://documents.iplt20.com/ipl/IPLHeadshot2024/6.png', // Placeholder image
  },
  
  // Add more faculty members as needed
];

const Faculty = () => {
  return (
    <Container className="mt-5">
      <Row className="text-center mb-5">
        <Col>
          <h1>Our Faculty</h1>
          <p className="lead">Meet our experienced and dedicated faculty members.</p>
        </Col>
      </Row>

      <Row>
        {facultyMembers.map((member, index) => (
          <Col md={4} sm={6} key={index} className="mb-4">
            <Card className="h-100">
              <Card.Img variant="top" src={member.image} alt={member.name} />
              <Card.Body>
                <Card.Title>{member.name}</Card.Title>
                <Card.Text>
                  <FaChalkboardTeacher /> Position: {member.position}
                </Card.Text>
                <Card.Text>
                  <FaGraduationCap /> Qualifications: {member.qualifications}
                </Card.Text>
                <Card.Text>
                  <FaStar /> Experience: {member.experience}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Faculty;
