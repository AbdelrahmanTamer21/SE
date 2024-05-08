
import React, { useState, useRef } from "react";
import donationData from "../donationData";
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table } from 'antd';
import Highlighter from 'react-highlight-words';
import { useNavigate } from 'react-router-dom';
//import { Container } from "react-bootstrap";
import { Card, Container, Row, Col, Form } from 'react-bootstrap';
import clothes from '../clothes.png' ;
import Food from '../Food.png' ;
import Medical from '../Medical.png' ;
import Toys from '../Toys.png' ;
import Blood from '../Blood.png' ;
import SchoolSupplies from '../SchoolSupplies.png';
import './cardhover.css' ;

// <Card.Subtitle className="mb-2 text-muted">{donation.category}</Card.Subtitle>

function ViewDonationRequest(){
    
  
    // State to manage selected category
    const [selectedCategory, setSelectedCategory] = useState('all');
  
    // State to manage filtering criteria for clothes and toys
    const [filterCriteria, setFilterCriteria] = useState('');
  
    // Handle category selection
    const handleCategoryChange = (e) => {
      setSelectedCategory(e.target.value);
      setFilterCriteria(''); // Reset filter criteria when changing category
    };
  
    // Handle filtering criteria change for clothes (age) and toys (color)
    const handleFilterCriteriaChange = (e) => {
      setFilterCriteria(e.target.value);
    };
  
    // Filter donations based on selected category and filter criteria
    const filteredDonations = donationData.filter((donation) => {
      if (selectedCategory === 'all' || donation.category === selectedCategory) {
        if (selectedCategory === 'Clothing' && filterCriteria !== '') {
          return donation.age === filterCriteria || donation.gender === filterCriteria || donation.season === filterCriteria;
        }
        if (selectedCategory === 'Toys' && filterCriteria !== '') {
          return donation.age === filterCriteria || donation.gender === filterCriteria || donation.categoryToy === filterCriteria;
        }
        if (selectedCategory === 'School Supplies' && filterCriteria !== '') {
          return donation.type === filterCriteria;
        }
        if (selectedCategory === 'Food' && filterCriteria !== '') {
          return donation.type === filterCriteria;
        }
        if (selectedCategory === 'Medical Supplies' && filterCriteria !== '') {
          return donation.type === filterCriteria;
        }
        return true;
      }
      return false;
    });
  
    return (
      <Container>
        <h1>Donations</h1>
        <Row>
            <Row>
          <Col md={4}>
            <Form.Group>      
            <Form.Label>Filter by Category:</Form.Label> 
            <Form.Control as="select" style={{ width: '150px' }} size="sm" type="text" placeholder="Small input" value={selectedCategory} onChange={handleCategoryChange}>
                <option value="all">All</option>
                <option value="Clothing">Clothes</option>
                <option value="Toys">Toys</option>
                <option value="Medical Supplies">Medical Supplies</option>
                <option value="School Supplies">School Supplies</option>
                <option value="Food">Food</option>
                <option value="Blood Donations">Blood Donations</option>
              </Form.Control>
            </Form.Group>
          </Col>
          </Row>
          {selectedCategory === 'Clothing' && (
            <Col md={4}>
              <Form.Group>
                <Form.Label>Filter by Age:</Form.Label>
                <Form.Control as="select" style={{ width: '150px' }} size="sm" type="text" placeholder="Small input" value={filterCriteria} onChange={handleFilterCriteriaChange}>
                  <option value="">All Ages</option>
                  <option value="0-10">0-10</option>
                  <option value="10-20">10-20</option>
                  <option value="20-30">20-30</option>
                  <option value="30-40">30-40</option>
                  <option value="40-50">40-50</option>
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Filter by Gender:</Form.Label>
                <Form.Control as="select" style={{ width: '150px' }} size="sm" type="text" value={filterCriteria} onChange={handleFilterCriteriaChange}>
                  <option value="">All</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Filter by Season:</Form.Label>
                <Form.Control as="select" style={{ width: '150px' }} size="sm" type="text" value={filterCriteria} onChange={handleFilterCriteriaChange}>
                  <option value="">All</option>
                  <option value="Summer">Summer</option>
                  <option value="Winter">Winter</option>
                  <option value="Spring">Spring</option>
                  <option value="Fall">Fall</option>
                </Form.Control>
              </Form.Group>
            </Col>
          )}
          {selectedCategory === 'Toys' && (
            <Col md={4}>
              <Form.Group>
                <Form.Label>Filter by Age:</Form.Label>
                <Form.Control as="select" style={{ width: '150px' }} size="sm" type="text" placeholder="Small input" value={filterCriteria} onChange={handleFilterCriteriaChange}>
                  <option value="">All</option>
                  <option value="0-10">0-10</option>
                  <option value="10-20">10-20</option>
                  <option value="20-30">20-30</option>
                  <option value="30-40">30-40</option>
                  <option value="40-50">40-50</option>
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Filter by Gender:</Form.Label>
                <Form.Control as="select" style={{ width: '150px' }} size="sm" type="text" value={filterCriteria} onChange={handleFilterCriteriaChange}>
                  <option value="">All</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Filter by Category:</Form.Label>
                <Form.Control as="select" style={{ width: '150px' }} size="sm" type="text" value={filterCriteria} onChange={handleFilterCriteriaChange}>
                  <option value="">All</option>
                  <option value="Board Games">Board Games</option>
                  <option value="Stuffed Toys">Stuffed Toys</option>
                  <option value="Dolls">Dolls</option>
                  <option value="Sports">Sports</option>
                  <option value="Cars">Cars</option>
                  <option value="Outdoor">Outdoor</option>
                </Form.Control>
              </Form.Group>
            </Col>
          )}
          {selectedCategory === 'School Supplies' && (
            <Col md={4}>
              <Form.Group>
                <Form.Label>Filter by Type:</Form.Label>
                <Form.Control as="select" style={{ width: '150px' }} size="sm" type="text" placeholder="Small input" value={filterCriteria} onChange={handleFilterCriteriaChange}>
                  <option value="">All</option>
                  <option value="Books">Books</option>
                  <option value="Stationary">Stationary</option>
                </Form.Control>
              </Form.Group>
              </Col>
          )}
          {selectedCategory === 'Food' && (
            <Col md={4}>
              <Form.Group>
                <Form.Label>Filter by Type:</Form.Label>
                <Form.Control as="select" style={{ width: '150px' }} size="sm" type="text" placeholder="Small input" value={filterCriteria} onChange={handleFilterCriteriaChange}>
                  <option value="">All</option>
                  <option value="vegetables">Vegetables</option>
                  <option value="fruit">Fruit</option>
                  <option value="fresh meals">fresh meals</option>
                  <option value="canned foods">canned foods</option>
                  <option value="baked goods">baked goods</option>
                </Form.Control>
              </Form.Group>
              </Col>
          )}
          {selectedCategory === 'Medical Supplies' && (
            <Col md={4}>
              <Form.Group>
                <Form.Label>Filter by Type:</Form.Label>
                <Form.Control as="select" style={{ width: '150px' }} size="sm" type="text" placeholder="Small input" value={filterCriteria} onChange={handleFilterCriteriaChange}>
                  <option value="">All</option>
                  <option value="medical devices">medical devices</option>
                  <option value="medical equipment">medical equipment</option>
                  <option value="medication">medication</option>
                </Form.Control>
              </Form.Group>
              </Col>
          )}
        </Row>
        <h2>Filtered Donations</h2>
        <Row>
          {filteredDonations.map((donation) => (
            
            <Col key={donation.id}  className="mb-4 d-flex justify-content-center">
              <Card style={{ width: '18rem' }} className="custom-card">
                <Card.Img variant="top" src= {donation.category === 'Clothing'
                ? clothes
                : donation.category === 'Food'
                ? Food
                : donation.category === 'Medical Supplies'
                ? Medical
                :donation.category === 'Toys'
                ? Toys
                :donation.category === 'Blood Donations'
                ? Blood 
                :donation.category === 'School Supplies'
                ? SchoolSupplies :'/school-image.jpg'} 
                style={{ width: '17.9rem', height: '200px' }}/>

                <Card.Body>
                <Card.Title>{donation.itemName}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{donation.category}</Card.Subtitle>
                <Card.Text> {donation.description}</Card.Text>
                <Button variant="primary">View Details</Button>
                </Card.Body>
            </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  };
  
  export default ViewDonationRequest;