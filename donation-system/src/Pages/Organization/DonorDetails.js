import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import donationsData from '../DonationsData';
import DonorsData from '../DonorsData';
import donationData from '../donationData';
import { Card } from 'react-bootstrap';

function DonorDetails() {
    
    const {id} = useParams();
    const x =donationsData.find((don)=>don.donation_id===Number(id));
    const donor = DonorsData.find((don)=> don.donor_id===x.donor_id);
    const donation = donationData.find((don)=> Number(id)===don.id);
    
    return (
        <div>
            <h2>Donation Details</h2>
            {donation && (
                <div>
                    <Card>
                        <Card.Body>
                    <p>Category: {donation.category}</p>
                    <p>Item Name: {donation.itemName}</p>
                    <p>Condition: {donation.condition}</p>
                    </Card.Body>
                    </Card>
                </div>
            )}
            <h2>Donor Details</h2>
            {donor && (
                <div>
                    <Card>
                        <Card.Body>
                    <p>Name: {donor.first_name} {donor.last_name}</p>
                    <p>Email: {donor.email}</p>
                    <p>Phone: {donor.phone}</p>
                    <p>Address: {donor.address}</p>
                    </Card.Body>
                    </Card>
                   
                </div>
            )}
        </div>
    );
}

export default DonorDetails;
