// src/components/Faculty.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaChalkboardTeacher, FaGraduationCap, FaStar } from 'react-icons/fa';

const facultyMembers = [
  {
    name: 'John Doe',
    position: 'Principal',
    qualifications: 'M.Ed',
    experience: '20 years of experience in educational administration',
    image: 'https://documents.iplt20.com/ipl/IPLHeadshot2024/2.png', // Placeholder image
  },
  {
    name: 'Jane Smith',
    position: 'Vice Principal',
    qualifications: 'M.Sc. in Physics',
    experience: '15 years of teaching experience',
    image: 'https://documents.iplt20.com/ipl/IPLHeadshot2024/6.png', // Placeholder image
  },
  {
    name: 'Emily Johnson',
    position: 'English Teacher',
    qualifications: 'M.A. in English',
    experience: '10 years of teaching experience',
    image: 'https://documents.iplt20.com/ipl/IPLHeadshot2024/6.png', // Placeholder image
  },
  {
    name: 'Michael Brown',
    position: 'Mathematics Teacher',
    qualifications: 'M.Sc. in Mathematics',
    experience: '8 years of teaching experience',
    image: 'https://documents.iplt20.com/ipl/IPLHeadshot2024/6.png', // Placeholder image
  },
  {
    name: 'Sophia Davis',
    position: 'Science Teacher',
    qualifications: 'M.Sc. in Chemistry',
    experience: '12 years of teaching experience',
    image: 'https://documents.iplt20.com/ipl/IPLHeadshot2024/6.png', // Placeholder image
  },
  {
    name: 'David Wilson',
    position: ' Computer Science Teacher',
    qualifications: 'B.Tech in Computer Science',
    experience: '5 years of teaching experience',
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
