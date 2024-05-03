import { useNavigate, useParams } from 'react-router-dom';
import DonorsData from "../DonorsData"

function DonorsInfo() {
    const navigate = useNavigate();
    const { donor_id } = useParams();
    const donor = DonorsData.find(donor => donor.donor_id === donor_id);

    const goBack = () => {
        navigate('/Admin/Donors');
    }

    return (
        <div>
            <h1>Donor Information</h1>
            <p>First Name: {donor?.first_name}</p>
            <p>Last Name: {donor?.last_name}</p>
            <p>Email: {donor?.email}</p>  
            <button onClick={goBack}>Back</button>          
        </div>
    );
}

export default DonorsInfo;