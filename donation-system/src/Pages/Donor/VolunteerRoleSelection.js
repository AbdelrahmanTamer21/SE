import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const VolunteerRoleSelection = ({ onSelectRole }) => {
  const [selectedRole, setSelectedRole] = useState('');

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
    onSelectRole(event.target.value); 
  };

  return (
    <div className="volunteer-role-selection">
      <h2 className="text-center">Volunteer Role</h2>
      <div className="dropdown-container"> 
        <DropdownButton
          id="dropdown-basic-button"
          title="Select Role"
          className="text-center"
        >
          <Dropdown.Item href="regular-donor">Regular Donor</Dropdown.Item>
          <Dropdown.Item href="teacher">Teacher (Volunteer)</Dropdown.Item>
          <Dropdown.Item href="doctor">Doctor (Volunteer)</Dropdown.Item>
        </DropdownButton>
      </div>
    </div>
  );
};
export default VolunteerRoleSelection;