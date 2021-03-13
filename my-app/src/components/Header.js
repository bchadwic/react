// manage all the bootstrap for the navbar
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import '../styles/Header.css';

const Header = () => {
    return (
        <Container>
        {/* Elements are stored in container to prevent stretched navbar on large screen */}
        <div id='Header'>
            {/* Navbar collapses to fold view at small */}
            <Navbar expand='sm'>
                <Navbar.Brand href='#' id='Brand'>Word Bubble</Navbar.Brand>
                {/* Navbar toggle allows for the mobile dropdown nav menu */}
                <Navbar.Toggle id='Mobile-Nav-Button'/>
                <Navbar.Collapse className='justify-content-end'>
                    <Nav id="Mobile-Collapse" className='mx-0 px-0'>
                        <Nav.Link href="#" id='Login' className='Nav-Link pr-sm-3'>Login</Nav.Link>
                        <Nav.Link href="#" id='Sign-up' className='Nav-Link pl-sm-3'>Sign-up</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
        </Container>
    )
}

export default Header