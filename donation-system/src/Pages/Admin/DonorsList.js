import React, { useState, useEffect } from "react";
import DonorsData from "../DonorsData";
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';

function DonorsList() {
    const navigate = useNavigate();

    const handleRowClick = (donor_id) => {
        console.log(donor_id);
        navigate(`/Admin/DonorsInfo/${donor_id}`);
    }

    return (
        <div>
            <h1>Donors List</h1>
            <Table striped bordered hover size=" sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th >Last Name</th>
                        <th>Email</th>                  
                  </tr>
                </thead>
                <tbody>
                    {DonorsData.map((donor, index) => (
                        <tr key={index} onClick={() => handleRowClick(donor.donor_id)}>
                            <td>{index + 1}</td>
                            <td>{donor.first_name}</td>
                            <td>{donor.last_name}</td>
                            <td>{donor.email}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default DonorsList;