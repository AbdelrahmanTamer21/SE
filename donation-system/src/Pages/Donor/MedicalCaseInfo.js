import { useNavigate, useParams } from 'react-router-dom';
import medicalCasesData from './medicalCasesData';
import { Button } from 'react-bootstrap';

function MedicalCasesInfo() {
    const navigate = useNavigate();
    const { id } = useParams();
    const medicalCase = medicalCasesData.find(med => med.id === Number(id));
    
    const goBack = () => {
        navigate(-1);
    }

    return (
        <div>
            <h1>Medical Case Information</h1>
            <p>Patient Name: {medicalCase?.patientName}</p>
            <p>Medical Specialty: {medicalCase?. medicalSpecialty}</p>
            <p>Organization Name: {medicalCase?.organizationName}</p>
            <p>Address: {medicalCase?.address}</p>
            <p>Case Description: {medicalCase?.caseDesc}</p>  
            <Button variant="main-inverse" onClick={goBack}>Back</Button>
            <Button variant="main-inverse" className="ms-2">Donate</Button>          
        </div>
    );
}

export default MedicalCasesInfo;
