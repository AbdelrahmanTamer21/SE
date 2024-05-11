import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import { useNavigate } from 'react-router-dom';
import { FaTruck } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaPeopleCarry } from "react-icons/fa";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { Container, Row, Col, Card } from "react-bootstrap";


function OrganizationDashboard() {
  const navigate = useNavigate();

  const handleFulfilledPostsClick = () => {
    navigate('/FulfilledPosts');
  };

  const handleDonationPostsClick = () => {
    navigate('/DonationPosts');
  };

  const handleOrgViewDonationRequestsClick = () => {
    navigate('/OrgViewRequests');
  };

  const options = {
    animationEnabled: true,
    theme: "light2",
    title: {
      text: "Growth of Users"
    },
    axisY: {
      title: "Total",
      logarithmic: true
    },
    data: [{
      type: "spline",
      showInLegend: true,
      legendText: "Users at a given time",
      dataPoints: [
        { x: new Date(2001, 0), y: 1615},
        { x: new Date(2002, 0), y: 2069},
        { x: new Date(2003, 0), y: 2635},
        { x: new Date(2004, 0), y: 3723},
        { x: new Date(2005, 0), y: 5112},
        { x: new Date(2006, 0), y: 6660},
        { x: new Date(2007, 0), y: 9183},
        { x: new Date(2008, 0), y: 15844},
        { x: new Date(2009, 0), y: 23185},
        { x: new Date(2010, 0), y: 40336},
        { x: new Date(2011, 0), y: 70469},
        { x: new Date(2012, 0), y: 100504},
        { x: new Date(2013, 0), y: 138856},
        { x: new Date(2014, 0), y: 178391},
        { x: new Date(2015, 0), y: 229300},
        { x: new Date(2016, 0), y: 302300},
        { x: new Date(2017, 0), y: 405000}   
      ]
    }]
  };

  const pieChartOptions = {
    exportEnabled: true,
    animationEnabled: true,
    title: {
      text: "Donated Items"
    },
    data: [{
      type: "pie",
      startAngle: 75,
      toolTipContent: "<b>{label}</b>: {y}%",
      showInLegend: true,
      legendText: "{label}",
      indexLabelFontSize: 16,
      indexLabel: "{label} - {y}%",
      dataPoints: [
        { y: 20, label: "Clothes" },
        { y: 15, label: "Food" },
        { y: 10, label: "Books" },
        { y: 25, label: "Toys" },
        { y: 30, label: "Electronics" }
      ]
    }]
  };

  return (
    <Container fluid>
      <Row>
        <Col lg="3" sm="6">
          <Card className="card-stats">
            <Card.Body>
              <Row>
                <Col xs="5">
                  <div className="icon-big text-center icon-warning">
                    <FaTruck style={{ width: "3rem", height: "3rem"}}/>
                  </div>
                </Col>
                <Col xs="7">
                  <div className="numbers">
                    <p className="card-category">Drivers available</p>
                    <Card.Title as="h4">11</Card.Title>
                  </div>
                </Col>
              </Row>
            </Card.Body>
            <Card.Footer>
              <hr></hr>
              <div className="stats">
                <i className="fas fa-redo mr-1"></i>
                Update Now
              </div>
            </Card.Footer>
          </Card>
        </Col>
        <Col lg="3" sm="6">
          <Card className="card-stats">
            <Card.Body>
              <Row>
                <Col xs="5">
                  <div className="icon-big text-center icon-warning">
                  <FaMoneyBillWave style={{ width: "3rem", height: "3rem"}}/>
                  </div>
                </Col>
                <Col xs="7">
                  <div className="numbers">
                    <p className="card-category">Total Amount Raised</p>
                    <Card.Title as="h4">$ 110,345</Card.Title>
                  </div>
                </Col>
              </Row>
            </Card.Body>
            <Card.Footer>
              <hr></hr>
              <div className="stats">
                <i className="far fa-calendar-alt mr-1"></i>
                Last day
              </div>
            </Card.Footer>
          </Card>
        </Col>
        <Col lg="3" sm="6">
          <Card className="card-stats">
            <Card.Body>
              <Row>
                <Col xs="5">
                  <div className="icon-big text-center icon-warning">
                  <FaPeopleCarry style={{ width: "3rem", height: "3rem"}}/>
                  </div>
                </Col>
                <Col xs="7">
                  <div className="numbers">
                    <p className="card-category">Todays donors</p>
                    <Card.Title as="h4">23</Card.Title>
                  </div>
                </Col>
              </Row>
            </Card.Body>
            <Card.Footer>
              <hr></hr>
              <div className="stats">
                <i className="far fa-clock-o mr-1"></i>
                In the last hour
              </div>
            </Card.Footer>
          </Card>
        </Col>
        <Col lg="3" sm="6">
          <Card className="card-stats">
            <Card.Body>
              <Row>
                <Col xs="5">
                  <div className="icon-big text-center icon-warning">
                  <BsFillPersonPlusFill style={{ width: "3rem", height: "3rem"}}/>
                  </div>
                </Col>
                <Col xs="7">
                  <div className="numbers">
                    <p className="card-category">Community</p>
                    <Card.Title as="h4">+45K</Card.Title>
                  </div>
                </Col>
              </Row>
            </Card.Body>
            <Card.Footer>
              <hr></hr>
              <div className="stats">
                <i className="fas fa-redo mr-1"></i>
                Update now
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
      <Row>
      <Col md="8" style={{ marginTop: "20px" }}>
          <Card>
            <Card.Header>
              <Card.Title as="h4">Users Behavior</Card.Title>
              <p className="card-category">24 Hours performance</p>
            </Card.Header>
            <Card.Body>
              <div className="ct-chart" id="chartHours"> <CanvasJSReact.CanvasJSChart options={options} />
              </div>
            </Card.Body>
            <Card.Footer>
              <div className="legend">
                <i className="fas fa-circle text-info"></i>
                Open <i className="fas fa-circle text-danger"></i>
                Click <i className="fas fa-circle text-warning"></i>
                Click Second Time
              </div>
              <hr></hr>
              <div className="stats">
                <i className="fas fa-history"></i>
                Updated 3 minutes ago
              </div>
            </Card.Footer>
          </Card>
        </Col>
        <Col md="4">
          <Card style={{ marginTop: "20px" }}>
            <Card.Header>
              <Card.Title as="h4">Donated items</Card.Title>
              <p className="card-category">Last Campaign Performance</p>
            </Card.Header>
            <Card.Body>
              <div className="ct-chart ct-perfect-fourth" id="chartPreferences">
                <CanvasJSReact.CanvasJSChart options={pieChartOptions} />
              </div>
              <div className="legend">
                <i className="fas fa-circle text-info"></i>
                Open <i className="fas fa-circle text-danger"></i>
                Bounce <i className="fas fa-circle text-warning"></i>
                Unsubscribe
              </div>
              <hr></hr>
              <div className="stats">
                <i className="far fa-clock"></i>
                Campaign sent 2 days ago
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default OrganizationDashboard;
