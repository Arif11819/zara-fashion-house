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
                        <Navbar.Brand href="/home"><span className='title-first-letter'>Z</span>ARA FASHION HOUSE</Navbar.Brand>
                    </div>
                    <div className='navbar-link'>
                        <Nav className="me-auto">
                            <Nav.Link className='text-dark' href="/home">Home</Nav.Link>
                            <Nav.Link className='text-dark' href="/inventory">Inventory</Nav.Link>
                            <Nav.Link className='text-dark' href="/blogs">Blogs</Nav.Link>
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