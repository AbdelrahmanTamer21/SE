import React, { useState, useEffect } from "react";
import OrganizationData from "../OrganizationData";
import Table from 'react-bootstrap/Table';

function OrganizationList() {
     
    return (
        
        <div>
        <h1>Organizations List</h1>
        <Table striped bordered hover size=" sm">
            <thead>
            <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
            </tr>
            </thead>
            <tbody>
            {OrganizationData.map((org) => (
                <tr key={org.org_id} >
                <td>{org.org_id}</td>
                <td>{org.first_name}</td>
                <td>{org.last_name}</td>
                <td>{org.email}</td>
                </tr>
            ))}
            </tbody>
        </Table>
        </div>
    );
}

export default OrganizationList;