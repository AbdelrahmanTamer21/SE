import React, { useState } from 'react';

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
      acknowledged: true,
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

  return (
    <div>
      <h2>Fulfilled Donation Posts</h2>
      <div>
        <h3>Details of Fulfilled Donation Posts:</h3>
        <ul>
          {fulfilledPosts.map(post => (
            <li key={post.id}>
              <h4>{post.itemName}</h4>
              <p>{post.description}</p>
              <button onClick={() => toggleDetails(post.id)}>
                {post.showDetails ? 'Hide Donor Details' : 'View Donor Details'}
              </button>
              {post.showDetails && (
                <div>
                  <p>Donor: {post.donor.name}</p>
                  <p>Email: {post.donor.email}</p>
                  <p>Phone: {post.donor.phone}</p>
                </div>
              )}
              <p>Acknowledged: {post.acknowledged ? 'Yes' : 'No'}</p>
              {!post.acknowledged && (
                <button onClick={() => acknowledgeContribution(post.id)}>Acknowledge</button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FulfilledDonationPosts;
