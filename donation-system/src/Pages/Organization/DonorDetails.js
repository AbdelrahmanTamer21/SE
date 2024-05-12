import React from 'react';
import { useLocation } from 'react-router-dom';

function DonorDetails() {
    const location = useLocation();
    const selectedDonation = location.state.donation;
    const selectedDonor = location.state.donor;

    // Render selected donation and donor details
    return (
        <div>
            <h2>Donation Details</h2>
            {selectedDonation && (
                <div>
                    <p>Category: {selectedDonation.category}</p>
                    <p>Item Name: {selectedDonation.itemName}</p>
                    <p>Condition: {selectedDonation.condition}</p>
                    {/* Render other donation details as needed */}
                </div>
            )}
            <h2>Donor Details</h2>
            {selectedDonor && (
                <div>
                    <p>Name: {selectedDonor.first_name} {selectedDonor.last_name}</p>
                    <p>Email: {selectedDonor.email}</p>
                    <p>Phone: {selectedDonor.phone}</p>
                    <p>Address: {selectedDonor.address}</p>
                    {/* Render other donor details as needed */}
                </div>
            )}
        </div>
    );
}

export default DonorDetails;
