import { Card, Container, Form, Row, Col, Button, InputGroup } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import DonationsData from "../donationData";
import { useContext, useState } from "react";
import { UserContext } from "../../Components/UserContext";
import LoginData from "../LoginData";
import donationsData from "../DonationsData";

function Donate() {
    const navigate = useNavigate();
    const { request_id } = useParams();
    const donation = DonationsData.find(donation => donation.id === Number(request_id));
    const [amount, setAmount] = useState(0);
    const { username } = useContext(UserContext);
    const donor = LoginData.find((u) => u.username === username);

    function handleInputChange(e) {
        setAmount(e.target.value);
    }

    function handleSubmit(){
        const maxKey = donationsData.reduce((max, donation) => Math.max(max, donation.key), 0) + 1;
        const currentDate = new Date();
        let donationItem = {
            key: maxKey,
            donation_id: request_id,
            donor_id: donor.donor_id,
            quantity: amount,
            date: currentDate.toISOString().split('T')[0]
        }
        console.log(donationItem)
        DonationsData.push(donationItem)
        console.log(DonationsData)
    }

    return (
        <Container className="pt-3">
            <h1>Choose Donation Amount</h1>
            <Card>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <Row className="mt-4">
                            <Col>
                                <Form.Label>Amount</Form.Label>
                            </Col>
                            <Col>
                                <InputGroup>
                                    <Form.Control
                                        type="number"
                                        min="0"
                                        max={donation.quantity}
                                        value={amount}
                                        step={donation.category === 'Food' || donation.category === 'Blood Donations' ? '0.1' : 'any'}
                                        onChange={handleInputChange}
                                        required></Form.Control>
                                    {donation.category === 'Food' && donation.categoryFood === 'fruits and vegetables' ?
                                        (<InputGroup.Text>KG</InputGroup.Text>)
                                        : donation.category === 'Blood Donations' ?
                                            (<InputGroup.Text>L</InputGroup.Text>)
                                            : null}
                                </InputGroup>
                            </Col>
                            <Col>

                            </Col>
                        </Row>
                        <Row className="mt-4 justify-content-center">
                            <Button variant="main-inverse" className="w-25" type="submit">Donate</Button>
                        </Row>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default Donate;