import { useNavigate, useParams } from 'react-router-dom';
import DonationsData from "../donationData";
import { Button, Card, Row, Col, Container } from 'react-bootstrap';


function DonationsInfo() {
    const navigate = useNavigate();
    const { id } = useParams();
    const donation = DonationsData.find(donation => donation.id === Number(id));

    const goBack = () => {
        navigate(-1);
    }

    const donate = () => {
        navigate('/Donor/Delivery');
    }

    return (
        <div className='pt-3'>
            <h1>Donation Information</h1>
            <Card>
                <Card.Body>
                    <Container className='text-start'>
                        <Row>
                            <Col>
                                <p>Item Name: {donation?.itemName}</p>
                            </Col>
                            <Col>
                                <p>Category: {donation?.category}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p>Quantity Needed: {donation?.quantity} {donation.category === 'Food' && donation.categoryFood === 'fruits and vegetables' ? 'KG' : donation.category === 'Blood Donations' ? 'L' : null} </p>
                            </Col>
                            <Col>
                                <p>Condition: {donation?.condition}</p>
                            </Col>
                        </Row>
                        {donation.category === 'Clothing' || donation.category === 'Toys' ? (
                            <>
                                <Row>
                                    <Col>
                                        <p>Age: {donation?.age}</p>
                                    </Col>
                                    <Col>
                                        <p>Gender: {donation?.gender}</p>
                                    </Col>
                                </Row>
                                {donation.category === 'Clothing' ? (
                                    <Row>
                                        <Col>
                                            <p>Season: {donation?.season}</p>
                                        </Col>
                                        <Col>
                                            <p>Material: {donation?.material}</p>
                                        </Col>
                                    </Row>
                                ) :
                                    <Row>
                                        <Col>
                                            <p>Toy Image: <img
                                                src={donation.toyPicture === undefined ? 'https://t4.ftcdn.net/jpg/02/35/70/21/360_F_235702111_KkocG4AsR4dHy97wo8eQscrn4bKOXT4i.jpg' : donation?.toyPicture}
                                                alt='toy'
                                                width={100}
                                            />
                                            </p>
                                        </Col>
                                        <Col className='align-content-center'>
                                            <p>Toy category: {donation?.categoryToy}</p>
                                        </Col>
                                    </Row>
                                }
                            </>
                        ) : donation.category === 'Food' ? (
                            <Row>
                                <Col>
                                    <p>Food Category: {donation?.categoryFood}</p>
                                </Col>
                            </Row>
                        ) : donation.category === 'Medical Supplies' ? (
                                <>
                                    <Row>
                                        <Col>
                                            <p>Supply Type: {donation?.supplyType}</p>
                                        </Col>
                                        <Col>
                                            <p>Medical Use: {donation?.medicalUse}</p>
                                        </Col>
                                    </Row>
                                    {donation.supplyType !== 'medication' ? (
                                        <Row>
                                            <Col>
                                                <p>Device Image: <img
                                                    src={donation.deviceImage === undefined ? 'https://th.bing.com/th/id/R.1051a0cdb24615a7f2bb7c9249072a1e?rik=R4FzPgrXnfMUvA&pid=ImgRaw&r=0' : donation?.deviceImage}
                                                    alt='device'
                                                    width={100}
                                                />
                                                </p>
                                            </Col>
                                            <Col className='align-content-center'>
                                                <p>Device Type: {donation?.deviceType}</p>
                                            </Col>
                                        </Row>
                                    )
                                        : null}
                                </>
                            ) : donation.category === 'Blood Donations' ? (
                                    <>
                                        <Row>
                                            <Col>
                                                <p>Hospital: {donation?.hospital}</p>
                                            </Col>
                                            <Col>
                                                <p>Governorate: {donation?.governorate}</p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <p>Area: {donation?.area}</p>
                                            </Col>
                                            <Col>
                                                <p>Address: {donation?.address}</p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <p>Patient Name: {donation?.patientName}</p>
                                            </Col>
                                            <Col>
                                                <p>Blood Type: {donation?.bloodtype}</p>
                                            </Col>
                                        </Row>
                                    </>
                                ) : donation.category === 'School Supplies' ? (
                                    <>
                                        <Row>
                                            <Col>
                                                <p>Type: {donation?.type}</p>
                                            </Col>
                                            <Col>
                                                {donation.type === 'Books' ?
                                                    (<p>Book Name: {donation?.bookName}</p>) :
                                                    (<p>Item Type: {donation?.itemType}</p>)}
                                            </Col>
                                        </Row>
                                        {donation.type === 'Books' ? (
                                            <>
                                                <Row>
                                                    <Col>
                                                        <p>Book Author: {donation?.bookAuthor}</p>
                                                    </Col>
                                                    <Col>
                                                        <p>Book Language: {donation?.bookLanguage}</p>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <p>Book Edition: {donation?.bookEdition}</p>
                                                    </Col>
                                                    <Col>
                                                        <p>Book Short Summary: {donation?.bookShortSummary}</p>
                                                    </Col>
                                                </Row>
                                            </>
                                        ) : null}
                                    </>
                                ) : null}
                        <Row>
                            <p>Details: {donation?.description}</p>
                        </Row>
                    </Container>
                    <div>
                        <Button variant="main-inverse" className='w-25' onClick={goBack}>Back</Button>
                        <Button variant="main-inverse" className="w-25 ms-2" onClick={donate}>Donate</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default DonationsInfo;