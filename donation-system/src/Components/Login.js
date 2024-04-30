import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form'; // Add this line

function Login(){
    const navigate = useNavigate();
    return (
        <div>
            <h1>Login</h1>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                <Form.Control
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>
        </div>
    );
}
export default Login;