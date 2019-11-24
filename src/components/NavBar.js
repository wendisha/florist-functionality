import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

const NavBar = () => {
    return(
        <Navbar variant="dark">
            <Navbar.Brand href="https://www.lantern.co/">
                <img src="https://mvp-lantern-staging.s3.us-east-2.amazonaws.com/LOGO_Black.png"
                width="200" className="d-inline-block align-top" alt="Lantern logo"/>
            </Navbar.Brand>



                {/* <a class="max-w-xs" href="/">
            <img src="https://mvp-lantern-staging.s3.us-east-2.amazonaws.com/LOGO_Black.png" width="200" alt="Lantern">
          </a> */}
                <Nav className="mr-auto">
                    {/* <NavLink exact activeClassName="active" to="/bookmarks" style={{ color: '#FFF', paddingRight: '15px' }}>Bookmarks</NavLink>
                    <NavLink exact activeClassName="active" to="/browse-schools" style={{ color: '#FFF' }}>Browse Schools</NavLink> */}
                    <Nav.Link className="inline-block nav-link text-center" href="https://www.lantern.co/about" style={{ color: '#000', paddingRight: '50px' }}>About Us</Nav.Link>
                    <Nav.Link href="https://www.lantern.co/howitworks" style={{ color: '#000', paddingRight: '50px' }}>How it works</Nav.Link>
                    <Nav.Link href="https://www.lantern.co/articles" style={{ color: '#000', paddingRight: '50px' }}>Articles</Nav.Link>
                </Nav>
                {/* { loggedIn ? <Logout/> : null } */}
        </Navbar>
    )
}

{/* <a class="inline-block hover:text-sunriseYellow mx-4 text-center" href="https://www.lantern.co/about">
About Us
</a>
<a class="inline-block hover:text-sunriseYellow mr-4 text-center" href="https://www.lantern.co/howitworks">
How it works
</a>
<a class="inline-block hover:text-sunriseYellow text-center" href="https://www.lantern.co/articles">
Articles
</a> */}


export default NavBar