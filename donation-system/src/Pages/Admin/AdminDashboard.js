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

const Dashboard = () => {
    const [chartData, setChartData] = useState({});
    Chart.register(CategoryScale);

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
    
        console.log(donorCounts, orgCounts);
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
                    <Card className='shadow rounded-0'>
                        <Card.Body>
                            <h4>Total number of donations</h4>
                        </Card.Body>
                    </Card>
                </Col>
                {/* 2nd Card */}
                <Col>
                    <Card className='shadow rounded-0'>
                        <Card.Body>
                            <h4>Number of donors and Organization Requests</h4>
                        </Card.Body>
                    </Card>
                </Col>
                {/*3rd Card */}
                <Col>
                    <Card className='shadow rounded-0'>
                        <Card.Body>
                            <h4>Number of Donors and Organizations</h4>
                        </Card.Body>
                    </Card>
                </Col>
                {/* 4th Card */}
                <Col>
                    <Card className='shadow rounded-0'>
                        <Card.Body>

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
                                        
                                        type: 'category' },
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