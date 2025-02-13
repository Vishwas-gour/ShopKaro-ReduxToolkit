import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../img/logo.png'


function MyNav() {
    return (
        <>
            <div className='logo'><img src={logo} alt="Website Logo" /> </div>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="home">Home</Nav.Link>
                        <Nav.Link as={Link} to="category">Category</Nav.Link>
                        <Nav.Link as={Link} to="cart">Cart</Nav.Link>
                    </Nav>
                </Container>
            </Navbar >
        </>
    )
}

export default MyNav