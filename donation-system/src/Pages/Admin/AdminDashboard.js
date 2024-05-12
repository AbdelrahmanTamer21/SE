import {
    Row,
    Col,
    Card,
} from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale } from 'chart.js/auto';
import React, { useState, useEffect } from 'react';
import LoginData from '../LoginData';
import "./dashboard.css";
import donationsData from '../DonationsData';
import donationData from '../donationData';
import DonorsData from '../DonorsData';
import OrganizationData from '../OrganizationData';
import notificationsData from '../NotificationData';

const Dashboard = () => {
    const [chartData, setChartData] = useState({});
    Chart.register(CategoryScale);

    function circleData(data) {
        return (
            <div className="code-copy">
                <svg id="sv" xmlns="http://www.w3.org/2000/svg" width="70" height="70" style={{ fill: '#438844' }} viewBox="-10 -10 120 120" >
                    <path className="st0" stroke='#438844' stroke-width="5" d="M18.2,81.8C10,73.7,5,62.4,5,50C5,25.1,25.1,5,50,5s45,20.1,45,45c0,12.4-5,23.7-13.2,31.8l3.5,3.5
	c9-9,14.6-21.5,14.6-35.4c0-27.6-22.4-50-50-50S0,22.4,0,50c0,13.8,5.6,26.3,14.6,35.4L18.2,81.8z"/>
                    <path className="st1" stroke='#438844' stroke-width="5" d="M50,5c24.9,0,45,20.1,45,45c0,12.4-5,23.7-13.2,31.8c-1,1-1,2.6,0,3.5s2.6,1,3.5,0c9-9,14.6-21.5,14.6-35.4
	c0-27.6-22.4-50-50-50C22.4,0,0,22.4,0,50c0,13.8,5.6,26.3,14.6,35.4c1,1,2.6,1,3.5,0s1-2.6,0-3.5C10,73.7,5,62.4,5,50
	C5,25.1,25.1,5,50,5z"/>
                </svg>
                <span>{data}</span>
            </div>
        )
    }

    const countPerDay = (data) => {
        return data.reduce((acc, item) => {
            if (!item.joined_date) {
                console.warn(`Missing joined_date: ${JSON.stringify(item)}`);
                return acc;
            }
            const [year, month, day] = item.joined_date.split('-').map(Number);
            let date = new Date(year, month - 1, day); // months are 0-indexed in JavaScript
            date.setMinutes(date.getMinutes() - date.getTimezoneOffset()); // adjust for timezone
            if (isNaN(date)) {
                console.warn(`Invalid joined_date: ${item.joined_date}`);
                return acc;
            }
            const dateString = date.toISOString().split('T')[0];
            acc[dateString] = (acc[dateString] || 0) + 1;
            return acc;
        }, {});
    }

    useEffect(() => {
        const approvedDonors = LoginData.filter(item => item.status === 'approved' && item.type === 'Donor');
        const approvedOrgs = LoginData.filter(item => item.status === 'approved' && item.type === 'Organization');

        const donorCounts = countPerDay(approvedDonors);
        const orgCounts = countPerDay(approvedOrgs);

        // Create a set of all unique dates
        const allDates = new Set([...Object.keys(donorCounts), ...Object.keys(orgCounts)]);

        // Sort the dates
        const sortedDates = Array.from(allDates).sort();

        //console.log(donorCounts, orgCounts);
        setChartData({
            labels: sortedDates, // Use the sorted dates as labels
            datasets: [
                {
                    label: '# Donors',
                    data: sortedDates.map(date => donorCounts[date] || 0),
                    backgroundColor: '#f87979',
                    categoryPercentage: 1.0, // Adjust the size of the outer bars
                    barPercentage: 0.5, // Adjust the size of the inner bars
                },
                {
                    label: '# Organizations',
                    data: sortedDates.map(date => orgCounts[date] || 0),
                    backgroundColor: '#79f879',
                    categoryPercentage: 1.0, // Adjust the size of the outer bars
                    barPercentage: 0.5, // Adjust the size of the inner bars
                },
            ],
        });
    }, [LoginData]);
    return (
        <div className='ms-5 me-5'>
            <Row className='pt-3' xl>
                {/* 1st Card */}
                <Col>
                    <Card className='shadow rounded-0 h-100'>
                        <Card.Body className='d-flex align-items-center'>
                            <Row>
                                <Col md="auto" className='pe-0 align-content-center'>
                                    {circleData(donationsData.length)}
                                </Col>
                                <Col>
                                    <h4 style={{ marginTop: '0.2rem' }}>Total number of donations</h4>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                {/* 2nd Card */}
                <Col>
                    <Card className='shadow rounded-0 h-100'>
                        <Card.Body className='d-flex align-items-center'>
                            <Row>
                                <Col md="auto" className='pe-0 align-content-center'>
                                    {circleData(donationData.length)}
                                </Col>
                                <Col>
                                    <h4>Number of donors and Organization Requests</h4>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                {/*3rd Card */}
                <Col>
                    <Card className='shadow rounded-0 h-100'>
                        <Card.Body className='d-flex align-items-center'>
                            <Row>
                                <Col md="auto" className='pe-0 align-content-center'>
                                    {circleData(DonorsData.length + OrganizationData.length)}
                                </Col>
                                <Col>
                                    <h4>Number of Donors and Organizations</h4>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                {/* 4th Card */}
                <Col>
                    <Card className='shadow rounded-0 h-100'>
                        <Card.Body className='d-flex align-items-center'>
                        <Row>
                                <Col md="auto" className='pe-0 align-content-center'>
                                    {circleData(notificationsData.length)}
                                </Col>
                                <Col>
                                    <h4 style={{ marginTop: '0.2rem' }}>Total number of notifications</h4>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className='pt-3'>
                <Col className='shadow d-flex justify-contents-center'>
                    <div className="chart-container">
                        {chartData && chartData.labels && chartData.datasets && (
                            <Bar
                                data={chartData}
                                options={{
                                    responsive: true,
                                    maintainAspectRatio: false,
                                    scales: {
                                        y: {
                                            beginAtZero: true,
                                            ticks: {
                                                callback: function (value) {
                                                    if (value % 1 === 0) {
                                                        return value;
                                                    }
                                                }
                                            }
                                        },
                                        x: {

                                            type: 'category'
                                        },
                                    },
                                }}
                            />
                        )}
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Dashboard;