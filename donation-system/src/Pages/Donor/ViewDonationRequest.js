import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import donationData from '../donationData'; 
import { useNavigate } from 'react-router-dom';




function ViewDonationRequest() {
  
  const navigate = useNavigate();
  const handleClothesClick = () => {
    navigate('/ViewListClothes');
  };
  const handleMedClick = () => {
    navigate('/ViewListMedicalSupplies');
  };
  const handleBloodClick = () => {
    navigate('/ViewListBloodDonations');
  };
  const handleFoodClick = () => {
    navigate('/ViewListFood');
  };
  const handleToysClick = () => {
    navigate('/ViewListToys');
  };
  const handleSchoolClick = () => {
    navigate('/ViewListSchoolSupplies');
  };
  
  
  console.log(donationData);
  return (
    <Container fluid>

    <DropdownButton id="dropdown-basic-button" title="Select By Category">
      <Dropdown.Item href="#/action-1">All</Dropdown.Item>
      <Dropdown.Item onClick={handleClothesClick}>Clothes</Dropdown.Item>
      <Dropdown.Item onClick={handleMedClick}>Medical Supplies</Dropdown.Item>
      <Dropdown.Item onClick={handleSchoolClick}>School Supplies</Dropdown.Item>
      <Dropdown.Item onClick={handleToysClick}>Toys</Dropdown.Item>
      <Dropdown.Item onClick={handleFoodClick}>Food</Dropdown.Item>
      <Dropdown.Item onClick={handleBloodClick}>Blood Donations</Dropdown.Item>
    </DropdownButton>
    
      <Row className='justify-content-center align-items-center mx-auto col-12'>
        <Col lg='9' className='my-5'>
          <h1 className="text-Black mb-4 text-center">View Donation Requests</h1>
          <Row classname='card mt-3 d-flex justify-content-center mx-auto col-12'>
            {donationData.map((post) => (
              <Col key={post.id}>
               <Card style={{ width: '18rem' }}>
                  <Card.Body>
                  <Card.Title>{post.itemName}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{post.category}</Card.Subtitle>
                  <Card.Text>{post.description}</Card.Text>
                  <Card.Link href="#">View Details</Card.Link>
                  <Card.Link href="#">Donate</Card.Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}


export default ViewDonationRequest;