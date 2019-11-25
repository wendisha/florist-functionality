import React from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'

const NavBar = () => {
    return(
        <Navbar bg="light" variant="dark" style={{ height: '8rem', paddingRight: '15px' }}>
            <div className="container">
                <Navbar.Brand href="https://www.lantern.co/">
                    <img src="https://mvp-lantern-staging.s3.us-east-2.amazonaws.com/LOGO_Black.png"
                    width="200" className="d-inline-block align-top" alt="Lantern logo"/>
                </Navbar.Brand>
                <Nav className="mr-right">
                    <span className="navigation">
                        <Nav.Link className="nav-link text-center" href="https://www.lantern.co/about" >About Us</Nav.Link>
                        <Nav.Link className="nav-link text-center" href="https://www.lantern.co/howitworks" >How it works</Nav.Link>
                        <Nav.Link className="nav-link text-center" href="https://www.lantern.co/articles" >Articles</Nav.Link>
                    </span>
                    <span className="login">
                        <Nav.Link className="nav-link text-center" style={{fontWeight: 'bold'}} href="https://www.lantern.co/login" >Log In</Nav.Link>
                        <Button variant="warning" className='btn-lg round' href="https://www.lantern.co/register/stepone">Create Account</Button>
                    </span>
                </Nav>
            </div>
        </Navbar>
    )
}

export default NavBar