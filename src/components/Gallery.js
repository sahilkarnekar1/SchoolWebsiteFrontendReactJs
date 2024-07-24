// src/components/Gallery.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import { FaImages, FaBuilding, FaFilter } from 'react-icons/fa';

const galleryItems = [
  {
    type: 'event',
    date: '2023-05-01',
    src: 'https://c8.alamy.com/comp/BDR9TC/summer-sports-day-at-english-country-primary-school-BDR9TC.jpg',
    description: 'Students participating in various sports events',
    mediaType: 'photo'
  },
  {
    type: 'infrastructure',
    date: '2023-04-15',
    src: 'https://5.imimg.com/data5/SELLER/Default/2022/8/DQ/KX/FN/7035265/school-building-250x250.jpg',
    description: 'New School Building',
    mediaType: 'photo'
  },
  {
    type: 'event',
    date: '2023-06-01',
    src: 'https://c8.alamy.com/comp/BDR9TC/summer-sports-day-at-english-country-primary-school-BDR9TC.jpg',
    description: 'Students participating in various sports events',
    mediaType: 'photo'
  },
  {
    type: 'event',
    date: '2023-06-02',
    src: 'https://www.thoughtco.com/thmb/GVrNK4GOdDIchmoFyQiu0zDALvw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/surprised-student-watches-chemical-reaction-during-experiment-1042602754-5c3c016ac9e77c0001a2897d.jpg',
    description: 'Students presenting their science projects',
    mediaType: 'photo'
  },
  {
    type: 'event',
    date: '2023-06-03',
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3ANcF6fiHhBDozo-5xLSyqvjIRTVjxx1shw&s',
    description: 'Students performing in the cultural fest',
    mediaType: 'photo'
  },
  {
    type: 'infrastructure',
    date: '2023-06-04',
    src: 'https://cdn.prometheanworld.com/wp-content/uploads/2021/12/18150443/AP7-Ti-Front_1172559673_0721v1-1.png',
    description: 'A glimpse of our interactive classrooms',
    mediaType: 'photo'
  },
  {
    type: 'infrastructure',
    date: '2023-06-05',
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOf4sJMWqT53TZLLvzBrB1HIT9Ft9R5h_zvw&s',
    description: 'Students reading and studying in the school library',
    mediaType: 'photo'
  },
  // New entries for videos
  {
    type: 'infrastructure',
    date: '2023-06-06',
    src: 'https://videos.pexels.com/video-files/3209663/3209663-sd_640_360_25fps.mp4',
    description: 'Virtual tour of Springdale Public School',
    mediaType: 'video'
  },
  {
    type: 'event',
    date: '2023-06-07',
    src: 'https://videos.pexels.com/video-files/3196465/3196465-sd_640_360_25fps.mp4',
    description: 'Highlights from the Annual Function 2023',
    mediaType: 'video'
  },
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
              {item.mediaType === 'photo' ? (
                <Card.Img variant="top" src={item.src} alt={item.description} />
              ) : (
                <video className="card-img-top" controls>
                  <source src={item.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
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
