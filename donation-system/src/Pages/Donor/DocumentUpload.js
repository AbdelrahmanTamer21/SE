import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import { Card, Row, Col, Form, Button } from 'react-bootstrap';

const DocumentUpload = ({ onUploadSuccess }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    // Basic validation (replace with more robust validation)
    if (!file || !file.type.match('application/pdf')) {
      setErrorMessage('Please upload a PDF document.');
      return;
    }

    setErrorMessage(''); // Clear any previous error messages
  };

  const handleUpload = () => {
    if (!selectedFile) {
      setErrorMessage('Please select a file to upload.');
      return;
    }

    // Simulate upload (replace with actual upload logic)
    console.log('Uploading file:', selectedFile.name);
    onUploadSuccess(selectedFile); // Call parent component function

    setSelectedFile(null); // Clear file selection after upload
  };

  return (
    <Card className="text-black m-5" style={{ borderRadius: '25px' }}>
      <Card.Body>
        <Row>
          <Col xs={12} className="d-flex flex-column align-items-center">
            <h3 className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
              Document Upload
            </h3>
            <Form>
              <div className="d-flex flex-row align-items-center mb-4">
                <Form.Control type="file" accept=".pdf" onChange={handleFileChange} />
              </div>
              {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
              <Button className="mb-4" size="lg" disabled={!selectedFile}>
                Upload
              </Button>
            </Form>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default DocumentUpload;
