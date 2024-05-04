import './BackButton.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function BackButton() {
    const navigate = useNavigate();
    const goBack = () => {
        navigate('/Admin/Organizations');
    }

    return (
        <button className="BackButton" onClick={goBack}>
            Back
        </button>
    );
}

export default BackButton;