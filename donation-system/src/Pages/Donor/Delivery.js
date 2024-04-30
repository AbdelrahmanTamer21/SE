import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Alert, Form, FormGroup, FormSelect, FormControl, InputGroup, Button } from 'react-bootstrap'; // Import Bootstrap components



function Delivery() {
  const [transportationType, setTransportationType] = useState('');
  const [pickupDate, setPickupDate] = useState(new Date()); // Default to current date
  const [pickupTime, setPickupTime] = useState(''); // New state for pickup time
  const [pickupScheduled, setPickupScheduled] = useState(false);
  const [estimatedArrival, setEstimatedArrival] = useState(null);
  const [driverArrived, setDriverArrived] = useState(false); // Control visibility of notification

  // Simulate API call to fetch ETA (replace with actual implementation)
  useEffect(() => {
    const simulateETA = setTimeout(() => {
      if (pickupScheduled) {
        setEstimatedArrival(new Date(Date.now() + 30 * 60 * 1000)); // Set example ETA 30 minutes from pickup scheduling
      }
    }, 2000); // Simulate delay for fetching data

    return () => clearTimeout(simulateETA); // Cleanup function
  }, [pickupScheduled]); // Re-run on pickupScheduled change

  // Simulate notification for driver arrival (replace with actual notification logic)
  useEffect(() => {
    const simulateArrivalNotification = setTimeout(() => {
      if (estimatedArrival) {
        setDriverArrived(true);
      }
    }, 5000); // Simulate delay for notification after ETA

    return () => clearTimeout(simulateArrivalNotification); // Cleanup function
  }, [estimatedArrival]); // Re-run on estimatedArrival change

  const handleTransportationChange = (event) => {
    setTransportationType(event.target.value);
  };

  const handlePickupDateChange = (event) => {
    setPickupDate(new Date(event.target.value)); // Ensure valid date object
  };

  const handlePickupTimeChange = (event) => {
    setPickupTime(event.target.value);
  };

  const handleSchedulePickup = (event) => {
    event.preventDefault();
    setPickupScheduled(true);

    // Simulate API call to schedule pickup (replace with actual logic)
    console.log(
      `Transportation type: ${transportationType}, Pickup date: ${pickupDate.toLocaleDateString()}, Pickup time: ${pickupTime}`
    );
  };

  return (
    <Container fluid className="delivery-page d-flex flex-column justify-content-center align-items-center">
      <h1>Delivery</h1>

      {!pickupScheduled && (
        <Row className="schedule-bar">
          <Col xs={12}>
            <h2>Schedule Pickup</h2>
            <Form onSubmit={handleSchedulePickup}>
              <FormGroup>
                <Form.Label>Transportation Type:</Form.Label>
                <FormSelect value={transportationType} onChange={handleTransportationChange}>
                  <option value="">Select...</option>
                  <option value="car">Car</option>
                  <option value="truck">Truck</option>
                  {/* Add more options as needed */}
                </FormSelect>
              </FormGroup>
              <FormGroup>
                <Form.Label>Pickup Date:</Form.Label>
                <FormControl type="date" value={pickupDate.toISOString().slice(0, 10)} onChange={handlePickupDateChange} />
              </FormGroup>
              <FormGroup>
                <Form.Label>Pickup Time:</Form.Label>
                <InputGroup>
                  <FormControl type="time" value={pickupTime} onChange={handlePickupTimeChange} />
                </InputGroup>
              </FormGroup>
              <Button type="submit" variant="primary">
                Schedule Pickup
              </Button>
            </Form>
          </Col>
        </Row>
      )}

      {pickupScheduled && !driverArrived && (
        <Row>
          <Col xs={12}>
            <h2>View Estimated Time of Arrival (ETA)</h2>
            {estimatedArrival ? (
              <p>
                The driver is estimated to arrive at: {estimatedArrival.toLocaleTimeString()}
              </p>
            ) : (
              <Alert variant="info">
                Fetching ETA... Please wait a moment.
              </Alert>
            )}

          </Col>
        </Row>
      )}

      {driverArrived && (
        <Row>
          <Col xs={12}>
            <h2>Driver Arrival Notification</h2>
            <Alert variant="success">
              The driver has arrived for pickup/drop-off.
            </Alert>
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default Delivery;
