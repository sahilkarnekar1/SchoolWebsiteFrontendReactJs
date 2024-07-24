// src/components/Home.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'; // Correct import statement

const Home = () => {
  return (
    <div className="container mt-5">
      <div className="text-center">
        <h1 className="mb-4">Welcome to Our School</h1>
      </div>
      
      <Carousel className="mb-5">
        <Carousel.Item>
          <img className="d-block w-100" src="https://coreldrawdesign.com/resources/previews/preview-school-banner-design-education-&-school-promotion-template-free-vector-1624284099.jpg" alt="First slide" />
          <Carousel.Caption>
            <h3 className="bg-dark bg-opacity-50 p-2 rounded">First slide label</h3>
            <p className="bg-dark bg-opacity-50 p-2 rounded">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="https://d3jmn01ri1fzgl.cloudfront.net/photoadking/webp_thumbnail/white-and-grape-kid-creative-school-banner-template-0ygyd5151bb7c8.webp" alt="Second slide" />
          <Carousel.Caption>
            <h3 className="bg-dark bg-opacity-50 p-2 rounded">Second slide label</h3>
            <p className="bg-dark bg-opacity-50 p-2 rounded">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="https://coreldrawdesign.com/resources/previews/preview-school-banner-design-education-&-school-promotion-template-free-vector-1624284099.jpg" alt="Third slide" />
          <Carousel.Caption>
            <h3 className="bg-dark bg-opacity-50 p-2 rounded">Third slide label</h3>
            <p className="bg-dark bg-opacity-50 p-2 rounded">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="text-center">
        <div className="row">
          <div className="col-md-6 mb-3">
            <a href="/about" className="btn btn-primary btn-lg btn-block">About Us</a>
          </div>
          <div className="col-md-6 mb-3">
            <a href="/admissions" className="btn btn-secondary btn-lg btn-block">Admissions</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
