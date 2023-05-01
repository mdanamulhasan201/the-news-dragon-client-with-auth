import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Register = () => {
    const { createUser } = useContext(AuthContext);

    const [accepted, setAccepted] = useState(false);


    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        console.log(name, email, photo, password)
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser)
            })
            .catch(error => {
                console.log(error)
            })

    }

    const handleAccepted = event =>{
        setAccepted(event.target.checked)
    }

    return (
        <div>

            <Container className='mx-auto w-25 '>
                <h3 className='text-center'>Please Register</h3>
                <Form className='bg-light p-5' onSubmit={handleRegister}>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Enter Name" required />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Photo URl</Form.Label>
                        <Form.Control type="text" name='photo' placeholder="Enter URL" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check
                            onClick={handleAccepted}
                            type="checkbox"
                            name='accept'
                            label={<>Accept <Link to='/terms'> Terms and Conditions</Link> </>} />
                    </Form.Group>



                    <Button variant="primary" type="submit" disabled ={!accepted}>
                        Register
                    </Button>
                    <p>Already Have an Account? <Link to='/login'><span>Login</span></Link></p>

                    <Form.Text className="text-success">

                    </Form.Text>
                    <Form.Text className="text-danger">

                    </Form.Text>
                </Form>
            </Container>
        </div>
    );
};

export default Register;