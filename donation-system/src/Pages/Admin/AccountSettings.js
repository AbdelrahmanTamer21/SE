import React, { useState, useContext } from 'react';
import './Settings.css'
import { useNavigate } from 'react-router-dom';
import { InputGroup, Form, CardBody, Row, Col } from 'react-bootstrap';
import { UserContext } from '../../Components/UserContext';
import LoginData from '../LoginData';

const AccountSettings = () => {
  const [activeTab, setActiveTab] = useState('account-general');

  const TabLinks = ({ activeTab, setActiveTab }) => {
    return (
      <div className="list-group list-group-flush account-settings-links">
        <a
          className={`list-group-item list-group-item-action ${activeTab === 'account-general' ? 'active' : ''}`}
          data-toggle="list"
          href="#account-general"
          onClick={() => setActiveTab('account-general')}
        >
          General
        </a>
        <a
          className={`list-group-item list-group-item-action ${activeTab === 'account-change-password' ? 'active' : ''}`}
          data-toggle="list"
          href="#account-change-password"
          onClick={() => setActiveTab('account-change-password')}
        >
          Change password
        </a>
        <a
          className={`list-group-item list-group-item-action ${activeTab === 'account-info' ? 'active' : ''}`}
          data-toggle="list"
          href="#account-info"
          onClick={() => setActiveTab('account-info')}
        >
          Info
        </a>
        <a
          className={`list-group-item list-group-item-action ${activeTab === 'account-social-links' ? 'active' : ''}`}
          data-toggle="list"
          href="#account-social-links"
          onClick={() => setActiveTab('account-social-links')}
        >
          Social links
        </a>
        <a
          className={`list-group-item list-group-item-action ${activeTab === 'account-connections' ? 'active' : ''}`}
          data-toggle="list"
          href="#account-connections"
          onClick={() => setActiveTab('account-connections')}
        >
          Connections
        </a>
        <a
          className={`list-group-item list-group-item-action ${activeTab === 'account-notifications' ? 'active' : ''}`}
          data-toggle="list"
          href="#account-notifications"
          onClick={() => setActiveTab('account-notifications')}
        >
          Notifications
        </a>
      </div>
    );
  };

  return (
    <div className="container light-style flex-grow-1 container-p-y">
      <h4 className="font-weight-bold py-3 mb-4">Account settings</h4>
      <div className="card overflow-hidden">
        <div className="row no-gutters row-bordered row-border-light">
          <div className="col-md-3 pt-0">
            <TabLinks activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
          <div className="col-md-9">
            <TabContent activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
        </div>
      </div>
    </div>
  );
};


const TabContent = ({ activeTab, setActiveTab }) => {
  switch (activeTab) {
    case 'account-general':
      return <GeneralTab />;
    case 'account-change-password':
      return <div><ChangePasswordTab setActiveTab={setActiveTab} /></div>;
    case 'account-info':
      return <div>InfoTab Component</div>; // Replace with your component
    case 'account-social-links':
      return <div>SocialLinksTab Component</div>; // Replace with your component
    case 'account-connections':
      return <div>ConnectionsTab Component</div>; // Replace with your component
    case 'account-notifications':
      return <div>NotificationsTab Component</div>; // Replace with your component
    default:
      return null;
  }
};

const GeneralTab = () => {
  const { username } = useContext(UserContext);
  const user = LoginData.find((user) => user.username === username);
  const [userData, setUserData] = useState({
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    phone: user.phone
  });

  const handleInputChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  };
  const navigate = useNavigate();
  const handleLocClick = () => {
    navigate('/Admin/Profile');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedUser = { ...user, ...userData };
    if(photo !== "https://bootdey.com/img/Content/avatar/avatar1.png"){
      updatedUser.image = file;
    }else{
      updatedUser.image = undefined;
    }
    LoginData.forEach((u, i) => {
      if (u.username === username) {
        LoginData[i] = updatedUser;
      }
    });
    alert('Changes saved successfully');
    user.first_name = userData.first_name;
    user.last_name = userData.last_name;
    user.email = userData.email;
    user.phone = userData.phone;

    handleLocClick();
  };

  const [photo, setPhoto] = useState(user.image === undefined ?"https://bootdey.com/img/Content/avatar/avatar1.png":URL.createObjectURL(user.image));
  const [file, setFile] = useState(null);
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setPhoto(reader.result);
    };
    if (file) {
      setPhoto(URL.createObjectURL(file));
      setFile(file);
    }
    else {
      setPhoto("https://bootdey.com/img/Content/avatar/avatar1.png");
    }
  }
  return (
    <div className="tab-pane active show" id="account-general">
      <div className="card-body media align-items-center">
        <img src={photo} alt="" className="d-block ui-w-80" />
        <div className="media-body ml-4">
          <label className="btn btn-outline-primary">
            Upload new photo
            <input type="file" className="account-settings-fileinput" onChange={handleFileUpload} />
          </label>
          <button type="button" className="btn btn-default md-btn-flat">Reset</button>

          <div className="text-light small mt-1">Allowed JPG, GIF or PNG. Max size of 800K</div>
        </div>
      </div>
      <hr className="border-light m-0" />
      <Row>
        <Col>
          <CardBody className="pb-2">
            <Form.Label>First Name</Form.Label>

            <InputGroup>
              <Form.Control type="text" name="first_name" value={userData.first_name} onChange={handleInputChange} />
            </InputGroup>
          </CardBody>
        </Col>
        <Col>
          <CardBody className="pb-2">
            <Form.Label>Last Name</Form.Label>
            <InputGroup>

              <Form.Control type="text" name="last_name" value={userData.last_name} onChange={handleInputChange} />
            </InputGroup>
          </CardBody>
        </Col>
      </Row>
      <Row>
        <Col>
          <CardBody className="pb-2">
            <Form.Label>E-mail</Form.Label>

            <InputGroup>
              <Form.Control type="text" name="email" value={userData.email} onChange={handleInputChange} />
            </InputGroup>
          </CardBody>
        </Col>
        <Col>
          <CardBody className="pb-2">
            <Form.Label>Phone Number</Form.Label>
            <InputGroup>

              <Form.Control type="text" name="phone" value={userData.phone} onChange={handleInputChange} />
            </InputGroup>
          </CardBody>
        </Col>
      </Row>
      <div className="text-right mt-3">
        <button type="submit" className="btn btn-primary m-3" onClick={(e) => handleSubmit(e)}>Save changes</button>
        <button type="button" className="btn btn-default">Cancel</button>
      </div>
    </div>

  );
};
const ChangePasswordTab = ({ setActiveTab }) => {
  const { username } = useContext(UserContext);
  const [user, setUser] = useState(LoginData.find((user) => user.username === username));
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    repeatNewPassword: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const currentPassword = user.password;
    if (formData.currentPassword !== currentPassword) {
      alert('Current password is incorrect');
      return;
    } else if (formData.newPassword !== formData.repeatNewPassword) {
      alert('New password and repeat new password do not match');
    } else {
      setUser({
        ...user,
        password: formData.newPassword
      });
      alert('Password changed successfully');
      LoginData.forEach((user) => {
        if (user.username === username) {
          user.password = formData.newPassword;
        }

      });
      setActiveTab('account-general');
    }
  };

  return (
    <div className="tab-pane" id="account-general">
      <Form>
        <CardBody className="pb-2">
          <Form.Label>Current password</Form.Label>
          <InputGroup>
            <Form.Control type="password" name="currentPassword" value={formData.currentPassword} onChange={handleInputChange} />
          </InputGroup>

          <Form.Label>New password</Form.Label>
          <InputGroup>
            <Form.Control type="password" name="newPassword" value={formData.newPassword} onChange={handleInputChange} />
          </InputGroup>

          <Form.Label>Repeat new password</Form.Label>
          <InputGroup>
            <Form.Control type="password" name="repeatNewPassword" value={formData.repeatNewPassword} onChange={handleInputChange} />
          </InputGroup>
        </CardBody>
        <div className="text-right mt-3">
          <button type="submit" className="btn btn-primary m-3" onClick={(e) => handleSubmit(e)}>Save changes</button>
          <button type="button" className="btn btn-default">Cancel</button>
        </div>
      </Form>
    </div>
  );
};
export default AccountSettings;