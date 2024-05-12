import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";




// export function changePassword(){
//     return (
//         <div>
//             <h1>Change Password</h1>
//             <Form>
//             <Form.Group className="mb-3" controlId="formGroupPassword">
//                     <Form.Label>Old Password</Form.Label>
//                     <Form.Control type="password" placeholder="Enter your old password"   />
//                   </Form.Group>
//                   <Form.Group className="mb-3" controlId="formGroupPassword">
//                     <Form.Label>New Password</Form.Label>
//                     <Form.Control type="password" placeholder="Enter your new password"   />
//                   </Form.Group>
//                   <Form.Group className="mb-3" controlId="formGroupPassword">
//                     <Form.Label>Confirm Password</Form.Label>
//                     <Form.Control type="password" placeholder="Confirm your new password"   />
//                   </Form.Group>
//                   <Button variant="main-inverse" type="submit">
//                     <Link to="/Login">Submit</Link>
//                     </Button>
//             </Form>
//                    </div>
//     );

// }

function ForgotPassword(){
    const navigate = useNavigate();
    const handleForgotPassword = () => {
        navigate ("/changePassword");
    
    }
    return (
        <div>
            <h1>Forgot Password</h1>
            <Form>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control type="email" placeholder="Enter your E-mail address"   />
                  </Form.Group>       
                    <Button type="submit" variant="main-inverse" onClick={handleForgotPassword}></Button>
            </Form>
                   </div>
    );
}

export default ForgotPassword;