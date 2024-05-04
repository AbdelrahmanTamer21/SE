import {
    Row,
    Col,
    Card,
} from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale } from 'chart.js/auto';

const Dashboard = () => {

    Chart.register(CategoryScale);
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Donations Received',
                backgroundColor: '#f87979',
                data: [178391, 180000, 185000, 192000, 198000, 203000, 205000, 210000, 215000, 220000, 225000, 230000],
            },
        ],
    };

    return (
        <div className='ms-5 me-5'>
            <Row className='pt-3' xl>
                {/* 1st Card */}
                <Col>
                    <Card className='shadow' style={{ borderRadius: 0 }}>
                        <Card.Body>

                        </Card.Body>
                    </Card>
                </Col>
                {/* 2nd Card */}
                <Col>
                    <Card className='shadow' style={{ borderRadius: 0 }}>
                        <Card.Body>

                        </Card.Body>
                    </Card>
                </Col>
                {/*3rd Card */}
                <Col>
                    <Card className='shadow' style={{ borderRadius: 0 }}>
                        <Card.Body>

                        </Card.Body>
                    </Card>
                </Col>
                {/* 4th Card */}
                <Col>
                    <Card className='shadow' style={{ borderRadius: 0 }}>
                        <Card.Body>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className='pt-3'>
                <Col className='shadow d-flex justify-contents-center'>
                    <Bar
                        height={80}
                        data={data}
                        options={{
                            maintainAspectRatio: true,
                            scales: {
                                y: { beginAtZero: true },
                                x: { type: 'category' },
                            },
                        }} />
                </Col>
            </Row>
        </div>
    );
};

export default Dashboard;