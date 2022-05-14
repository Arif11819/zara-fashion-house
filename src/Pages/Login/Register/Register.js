import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../Login/SocialLogin/SocialLogin';


const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });


    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();


    const handleRegister = event => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        if (agree) {
            createUserWithEmailAndPassword(email, password);
        }

    }

    if (loading) {
        return <Loading></Loading>
    }

    if (user) {
        navigate('/home');
    }

    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-danger text-center mt-2'>Please Register</h2>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control ref={nameRef} type="text" placeholder="Enter Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <input onClick={() => setAgree(!agree)} className='me-2 mb-2' type="checkbox" name="terms" id="terms" />
                <label className={agree ? 'text-primary' : 'text-danger'} htmlFor="terms">Accept Terms and Conditions</label>
                <Button disabled={!agree} variant="danger w-50 mx-auto d-block mb-2 mt-2" type="submit">
                    Register
                </Button>
            </Form>
            <p>Already have an account? <Link to='/login' className='text-danger' style={{ textDecoration: 'none' }}>Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div >
    );
};

export default Register;