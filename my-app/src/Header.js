// manage all the bootstrap for the navbar
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';
import Image from "react-bootstrap/Image";
import Nav from 'react-bootstrap/Nav';
import NavbarToggle from "react-bootstrap/cjs/NavbarToggle";
import './style/Header.css';

const Header = () => {
    return (
        <Container>
        {/* Elements are stored in container to prevent stretched navbar on large screen */}
        <div id='Header'>
            {/* Navbar collapses to fold view at small */}
            <Navbar expand='sm'>
                <Navbar.Brand href='#' id='Brand'>Word Bubble</Navbar.Brand>
                {/* Navbar toggle allows for the mobile dropdown nav menu */}
                <Navbar.Toggle />
                <Navbar.Collapse className='justify-content-end' >
                    <Nav id="Mobile-Collapse" >
                        <Nav.Link href="#" id='Login' className='pr-sm-3'>Login</Nav.Link>
                        <hr id="Mobile-Divider"/>
                        <Nav.Link href="#" id='Sign-up' className='pl-sm-3'>Sign-up</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
        </Container>
    )
}

export default Header