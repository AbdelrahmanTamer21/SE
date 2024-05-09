import { useNavigate, useParams } from 'react-router-dom';
import DonationsData from "../donationData";

function DonationsInfo() {
    const navigate = useNavigate();
    const { id } = useParams();
    const donation = DonationsData.find(donation => donation.id === Number(id));
    
    const goBack = () => {
        navigate(-1);
    }

    return (
        <div>
            <h1>Donation Information</h1>
            <p>Item Name: {donation?.itemName}</p>
            <p>Category: {donation?.category}</p>
            <p>Condition: {donation?.condition}</p>
            <p>Details: {donation?.description}</p>  
            <button onClick={goBack}>Back</button>
            <button >Donate</button>          
        </div>
    );
}

export default DonationsInfo;