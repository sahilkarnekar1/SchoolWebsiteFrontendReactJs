// src/components/Gallery.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import { FaImages, FaBuilding, FaFilter } from 'react-icons/fa';

const galleryItems = [
  {
    type: 'event',
    date: '2023-05-01',
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThz7nmNbyl-KOymkcXUf51iSYMy8aGVXjhWQ&s',
    description: 'Annual Sports Day',
  },
  {
    type: 'infrastructure',
    date: '2023-04-15',
    src: 'https://5.imimg.com/data5/SELLER/Default/2022/8/DQ/KX/FN/7035265/school-building-250x250.jpg',
    description: 'New School Building',
  },
  {
    type: 'infrastructure',
    date: '2023-04-15',
    src: 'https://5.imimg.com/data5/SELLER/Default/2022/8/DQ/KX/FN/7035265/school-building-250x250.jpg',
    description: 'New School Building',
  },
  {
    type: 'event',
    date: '2023-05-01',
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThz7nmNbyl-KOymkcXUf51iSYMy8aGVXjhWQ&s',
    description: 'Annual Sports Day',
  },
  {
    type: 'infrastructure',
    date: '2023-04-15',
    src: 'https://5.imimg.com/data5/SELLER/Default/2022/8/DQ/KX/FN/7035265/school-building-250x250.jpg',
    description: 'New School Building',
  },
  {
    type: 'infrastructure',
    date: '2023-04-15',
    src: 'https://5.imimg.com/data5/SELLER/Default/2022/8/DQ/KX/FN/7035265/school-building-250x250.jpg',
    description: 'New School Building',
  },
  {
    type: 'event',
    date: '2023-05-01',
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThz7nmNbyl-KOymkcXUf51iSYMy8aGVXjhWQ&s',
    description: 'Annual Sports Day',
  },
  {
    type: 'event',
    date: '2023-05-01',
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThz7nmNbyl-KOymkcXUf51iSYMy8aGVXjhWQ&s',
    description: 'Annual Sports Day',
  },
  // Add more gallery items as needed
];

const Gallery = () => {
  const [filter, setFilter] = useState('all');

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredItems = galleryItems.filter(
    (item) => filter === 'all' || item.type === filter
  );

  return (
    <Container className="mt-5">
      <Row className="text-center mb-5">
        <Col>
          <h1>Gallery</h1>
          <p className="lead">Explore our school events and infrastructure.</p>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={6} className="mx-auto">
          <Form.Group className="d-flex align-items-center">
            <FaFilter size={20} className="mr-2" />
            <Form.Label htmlFor="filter" className="mr-2">Filter:</Form.Label>
            <Form.Control as="select" id="filter" value={filter} onChange={handleFilterChange}>
              <option value="all">All</option>
              <option value="event">Events</option>
              <option value="infrastructure">Infrastructure</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>

      <Row>
        {filteredItems.map((item, index) => (
          <Col md={4} sm={6} key={index} className="mb-4">
            <Card className="h-100">
              <Card.Img variant="top" src={item.src} alt={item.description} />
              <Card.Body>
                <Card.Title className="d-flex align-items-center">
                  {item.type === 'event' ? <FaImages className="mr-2" /> : <FaBuilding className="mr-2" />}
                  {item.description}
                </Card.Title>
                <Card.Text>
                  Date: {item.date}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Gallery;
