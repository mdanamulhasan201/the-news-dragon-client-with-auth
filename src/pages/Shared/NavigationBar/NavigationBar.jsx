import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../providers/AuthProvider';

const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" className='mb-5 ' >
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto ">
                            <Link className='me-2 text-decoration-none text-secondary' to='/category/0'>Home</Link>
                            <Link className='me-2 text-decoration-none text-secondary' to='/'>About</Link>
                            <Link className='me-2 text-decoration-none text-secondary' to='/'>Career</Link>
                        </Nav>
                        <Nav>
                            {user && <FaUserCircle className='fs-1'></FaUserCircle>}

                            {user ?
                                <Button onClick={handleLogOut} variant="dark" >Logout</Button> :
                                <Link to='/login'>
                                    <Button variant="dark">Login</Button>
                                </Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;