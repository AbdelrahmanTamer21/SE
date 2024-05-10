import { Outlet, useNavigate } from 'react-router-dom';
import { Container, Form } from "react-bootstrap";

function ViewDonationRequest() {
    const navigate = useNavigate();

    const handleChangeCategory = (value) => {
        let categorString = String(value).replace(' ', '');
        if(categorString === 'AllRequests'){
            categorString = ''
        }
        navigate(`/Donor/DonationRequests/${categorString}`);
    };

    return (
        <Container className="pt-3">
            <h1>Donation List</h1>
            <div className="pt-2 d-flex flex-column w-25 align-items-baseline">
                <Form.Label>Select Filter category</Form.Label>
                <Form.Select
                    className="mb-3"
                    aria-label="Default select example"
                    onChange={(e) => {
                        handleChangeCategory(e.target.value);
                    }
                    }>
                    <option value="All Requests">All Requests</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Food">Food</option>
                    <option value="Toys">Toys</option>
                    <option value="Medical Supplies">Medical Supplies</option>
                    <option value="Blood Donations">Blood Donations</option>
                    <option value="School Supplies">School Supplies</option>
                </Form.Select>
            </div>
            <Outlet />
        </Container>
    );
  };
  
  export default ViewDonationRequest;