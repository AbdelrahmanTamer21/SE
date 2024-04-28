import React, { useState } from 'react';

function NotificationReceiver() {
  const [notifications, setNotifications] = useState([]);


  const receiveNotification = (donationPost) => {
    setNotifications([...notifications, donationPost]);
    
    console.log('Received notification for donation post:', donationPost);
  };

 
  const coordinatePickup = (donationPost) => {

    console.log('Coordinating pickup for donation post:', donationPost);
  };

  return (
    <div>
      <h2>Receive Notifications for Chosen Donation Posts</h2>
      {/* Render notifications */}
      <div>
        <h3>Received Notifications:</h3>
        <ul>
          {notifications.map((notification, index) => (
            <li key={index}>
              {notification.itemName} - {notification.description}
              <button onClick={() => coordinatePickup(notification)}>Coordinate Pickup</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NotificationReceiver;
