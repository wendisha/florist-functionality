import React from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'

const NavBar = () => {
    return(
        // <Container bg="light" expand="lg"  >
        <Navbar bg="light" variant="dark" style={{ height: '8rem', paddingRight: '15px' }}>
            <div className="container">
                <Navbar.Brand href="https://www.lantern.co/">
                    <img src="https://mvp-lantern-staging.s3.us-east-2.amazonaws.com/LOGO_Black.png"
                    width="200" className="d-inline-block align-top" alt="Lantern logo"/>
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link className="nav-link text-center" href="https://www.lantern.co/about" style={{ paddingRight: '50px' }}>About Us</Nav.Link>
                    <Nav.Link href="https://www.lantern.co/howitworks" style={{ color: '#000', paddingRight: '50px' }}>How it works</Nav.Link>
                    <Nav.Link href="https://www.lantern.co/articles" style={{ color: '#000', paddingRight: '50px' }}>Articles</Nav.Link>
                    <Nav.Link href="https://www.lantern.co/login" style={{ color: '#000', paddingRight: '50px' }}>Log In</Nav.Link>
                    <Button variant="warning" className='btn-lg round' href="https://www.lantern.co/register/stepone">Create Account</Button>
                </Nav>
            </div>
        </Navbar>
        // </Container>
    )
}

export default NavBar