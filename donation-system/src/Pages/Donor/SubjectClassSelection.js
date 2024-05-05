import React, { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
//import styles from './SubjectSelection.css';

function ClassAndSubjectSelection() {
  const [subjects, setSubjects] = useState([]); // Array to store selected subjects
  const [numClasses, setNumClasses] = useState(0); // Number of pro-bono classes
  const [numStudents, setNumStudents] = useState(0); // Number of pro-bono students

  const handleSubjectChange = (event) => {
    const isChecked = event.target.checked;
    const subject = event.target.value;

    if (isChecked) {
      setSubjects([...subjects, subject]);
    } else {
      setSubjects(subjects.filter((s) => s !== subject));
    }
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    if (name === 'numClasses') {
      setNumClasses(parseInt(value));
    } else if (name === 'numStudents') {
      setNumStudents(parseInt(value));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Implement logic to submit selection data (e.g., send to server)
    alert(`Thank you for your willingness to help! You selected: 
      Subjects: ${subjects.join(', ')}
      Number of Pro-bono Classes: ${numClasses}
      Number of Pro-bono Students: ${numStudents}`);
  };

  return (
    <section className="vh-100 d-flex justify-content-center align-items-center">
      <Container className="py-5">
        <Card style={{ padding: '20px' }} className='text-black m-5' borderRadius='5px'>
          <Card.Body style={{ padding: '20px' }}>
            <h2 className="text-center mb-4">Classes&Subject Selection</h2>

            <Form onSubmit={handleSubmit}>
              {/* Subject Selection */}
              <Form.Group className="text-center">
                <Form.Label className="text-center">
                  Select Subjects You Can Teach (Choose all that apply):
                </Form.Label>
                <div className="d-flex flex-wrap justify-content-center">
                  <Form.Check
                    inline
                    type="checkbox"
                    id="subjectMath"
                    value="Math"
                    label="Math"
                    onChange={handleSubjectChange}
                  />
                  <Form.Check
                    inline
                    type="checkbox"
                    id="subjectScience"
                    value="Science"
                    label="Science"
                    onChange={handleSubjectChange}
                  />
                  <Form.Check
                    inline
                    type="checkbox"
                    id="subjectEnglish"
                    value="English"
                    label="English"
                    onChange={handleSubjectChange}
                  />
                  {/* Add more checkboxes for other subjects */}
                </div>
              </Form.Group>

              {/* Number of Classes */}
              <Form.Group className="text-center" >
                <Form.Label>How many Pro-bono Classes can you teach?  </Form.Label >
                <Form.Control
                  className="text-center"
                  type="number"
                  min="0"
                  name="numClasses"
                  value={numClasses}
                  onChange={handleInputChange}
                />
              </Form.Group>

              {/* Number of Students */}
              <Form.Group className="text-center">
                <Form.Label className="text-center">
                  How many Pro-bono Students can you give private tutoring to?
                </Form.Label>
                <Form.Control className="text-center"
                  type="number"
                  min="0"
                  name="numStudents"
                  value={numStudents}
                  onChange={handleInputChange}
                />
              </Form.Group >

              <Button className="text-center" type="submit" variant="primary" size="lg" block >
                Submit Selection
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
}

export default ClassAndSubjectSelection;
