import notificationsData from './NotificationData';
import { Container, Card } from 'react-bootstrap';
import { useState, useContext, useEffect } from 'react';
import { UserContext } from '../Components/UserContext';

function Notifications() {
  const { isLoggedIn, userRole } = useContext(UserContext);
  return isLoggedIn === true ? (
    <Container>
      {notificationsData.map((notification) => {
        if (String(userRole) === String(notification.type)) {
          return (
          <Card className='mt-3'>
            <Card.Body>
              <Card.Title>{notification.type} Notification</Card.Title>
              <Card.Text>{notification.description}</Card.Text>
              <Card.Text>{notification.dataTime}</Card.Text>
            </Card.Body>
          </Card>
          );
        }
        return null;
      })}
    </Container>
  ) : null;
}
export default Notifications;