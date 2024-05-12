import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { Card } from 'react-bootstrap';
import TeacherDoctorsDummy from './TeachersDoctorDummy';

function DonorDetails() {
    
    const {id} = useParams();
    const x =TeacherDoctorsDummy.find((don)=>don.donor_id===Number(id));
    
    
    return (
        <div>
            <h2>Voulnteer Details</h2>
            {x && (
                <div>
                    <Card>
                        <Card.Body>
                    <p>Name: {x.first_name} {x.last_name}</p>
                    <p>Email: {x.phone}</p>
                    <p>Voulnteered as: {x.position}</p>
                    <p>Address: {x.address}</p>
                    </Card.Body>
                    </Card>
                </div>
            )}
          
           
        </div>
    );
}

export default DonorDetails;
