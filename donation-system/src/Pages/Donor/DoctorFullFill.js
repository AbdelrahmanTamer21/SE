import React from 'react';
import { Card , Button} from 'react-bootstrap';
import approve from '../approve.png' ;

import { useNavigate, useParams, Outlet } from 'react-router-dom';

const ThankYouCard = () => {
  
  const navigate = useNavigate();
  const Dashboard = () => {
    navigate('/Donor/');
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card style={{ width: '500px', height: '500px' }}>
        <Card.Body style={{ textAlign: 'center' }}>
          <Card.Title>Thank You!</Card.Title>
          <Card.Text>
          Your kindness is what makes you such a great Doctor.
          </Card.Text>
          <img src={approve} alt="Thank You Image" style={{ width: '200px', height: '300px' }} />
          <Card.Text style={{ padding: '20px 0' }}>
            <Button className="w-25 ms-2" variant='main-inverse' onClick={Dashboard}>Done</Button>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ThankYouCard;