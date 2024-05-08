import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Chart as ChartJS, CategoryScale, LinearScale, PieElement, Title, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

function GucStudentDashboard() {
  const [povertyData, setPovertyData] = useState({ // State variable for poverty data
    labels: ['Asia', 'Africa', 'Europe', 'North America', 'South America', 'Oceania'],
    datasets: [
      {
        label: 'Percentage of Poor People',
        data: [20, 20, 20, 20, 10, 10], // Placeholder data
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)', // Red (Asia)
          'rgba(54, 162, 235, 0.2)', // Blue (Africa)
          'rgba(255, 206, 86, 0.2)', // Orange (Europe)
          'rgba(75, 192, 192, 0.2)', // Teal (North America)
          'rgba(255, 159, 64, 0.2)', // Orange (South America)
          'rgba(153, 102, 255, 0.2)', // Light Blue (Oceania)
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  });
  const [Effect, setEffectData] = useState({ // State variable for poverty data
    labels: ['Clothing', 'Food', 'School Supplies', 'Toys', 'Medical Supplies', 'Blood Donations'],
    datasets: [
      {
        label: 'Percentage of Poor People',
        data: [10, 20, 15, 20, 25, 10], // Placeholder data
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)', // Red (Asia)
          'rgba(54, 162, 235, 0.2)', // Blue (Africa)
          'rgba(255, 206, 86, 0.2)', // Orange (Europe)
          'rgba(75, 192, 192, 0.2)', // Teal (North America)
          'rgba(255, 159, 64, 0.2)', // Orange (South America)
          'rgba(153, 102, 255, 0.2)', // Light Blue (Oceania)
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  });

  return (
    <div className="d-flex flex-column vh-100">
      <h1>Donor Dashboard</h1>

      <Container className="flex-grow-1 p-5">
        <Row>
          {/* ... (other cards) */}
        </Row>
        <Row>
          <Col>
            <Card className="mb-4">
              <Card.Header>Rate of poverty in each Continent</Card.Header>
              <Card.Body>
                <Pie
                  data={povertyData}
                  options={{
                    responsive: true,
                    plugins: { legend: { position: 'top' }, title: { display: true, text: 'Percentages' } }
                  }
                  } />
              </Card.Body>
            </Card>
          </Col>
          <Col>
          <Card className="mb-4">
              <Card.Header>Effect of Donations in each Category </Card.Header>
              <Card.Body>
                <Pie
                  data={Effect}
                  options={{
                    responsive: true,
                    plugins: { legend: { position: 'top' }, title: { display: true, text: 'Percentages' } }
                  }
                  } />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default GucStudentDashboard;
