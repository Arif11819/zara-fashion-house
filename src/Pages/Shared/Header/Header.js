import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const handleSignOUt = () => {
        signOut(auth);
        navigate('/login');
    }
    return (
        <div>
            <Navbar>
                <Container>
                    <div className='title'>
                        <Navbar.Brand href="/home"><span className='title-first-letter'>Z</span><span className='tilte-letter'>ARA FASHION HOUSE</span></Navbar.Brand>
                    </div>
                    <div>
                        <Nav className="me-auto navbar-link">
                            <Nav.Link className='text-dark' as={Link} to="home">Home</Nav.Link>
                            <Nav.Link className='text-dark' as={Link} to="items">Items</Nav.Link>
                            <Nav.Link className='text-dark' as={Link} to="blogs">Blogs</Nav.Link>
                            {
                                user ?
                                    <button className='btn btn-link text-dark text-decoration-none sign-out' onClick={handleSignOUt}>Sign Out</button>
                                    :
                                    <Nav.Link className='text-dark' as={Link} to="login">
                                        Login
                                    </Nav.Link>
                            }
                        </Nav>
                    </div>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;