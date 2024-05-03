import React, { useState } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';

function FulfilledDonationPosts() {
  const [fulfilledPosts, setFulfilledPosts] = useState([
    // Sample data for fulfilled donation posts
    {
      id: 1,
      itemName: 'Clothing',
      description: 'Assorted clothes for children',
      donor: {
        name: 'John Doe',
        email: 'john@example.com',
        phone: '123-456-7890'
      },
      acknowledged: false, // Flag to track acknowledgment
      showDetails: false // Flag to track whether donor details are shown
    },
    {
      id: 2,
      itemName: 'Food',
      description: 'Canned goods and non-perishable items',
      donor: {
        name: 'Jane Smith',
        email: 'jane@example.com',
        phone: '987-654-3210'
      },
      acknowledged: false,
      showDetails: false
    }
  ]);

  // Function to toggle showing donor details
  const toggleDetails = (id) => {
    const updatedPosts = fulfilledPosts.map(post =>
      post.id === id ? { ...post, showDetails: !post.showDetails } : post
    );
    setFulfilledPosts(updatedPosts);
  };

  // Function to acknowledge donor contribution
  const acknowledgeContribution = (id) => {
    const updatedPosts = fulfilledPosts.map(post =>
      post.id === id ? { ...post, acknowledged: true } : post
    );
    setFulfilledPosts(updatedPosts);
  };

  // Function to delete a donation post
  const deletePost = (id) => {
    const updatedPosts = fulfilledPosts.filter(post => post.id !== id);
    setFulfilledPosts(updatedPosts);
  };

  return (
    <div>
      <h2>Fulfilled Donation Posts</h2>
      <Row>
        {fulfilledPosts.map(post => (
          <Col key={post.id} xs={12} md={6} lg={4}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>{post.itemName}</Card.Title>
                <Card.Text>{post.description}</Card.Text>
                <Button variant="primary" onClick={() => toggleDetails(post.id)}>
                  {post.showDetails ? 'Hide Donor Details' : 'View Donor Details'}
                </Button>
                <Button variant="danger" onClick={() => deletePost(post.id)}>Delete</Button>
                {post.showDetails && (
                  <div>
                    <p>Donor: {post.donor.name}</p>
                    <p>Email: {post.donor.email}</p>
                    <p>Phone: {post.donor.phone}</p>
                  </div>
                )}
                <p>Acknowledged: {post.acknowledged ? 'Yes' : 'No'}</p>
                {!post.acknowledged && (
                  <Button variant="success" onClick={() => acknowledgeContribution(post.id)}>Acknowledge</Button>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default FulfilledDonationPosts;
