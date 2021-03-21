// manage all the bootstrap for the navbar
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../styles/Header.css';

const Header = () => {
    return (
        <div id='Header'>
            <Navbar expand='sm'>
                <Navbar.Brand href='#' id='Brand'>Word Bubble</Navbar.Brand>
                <Navbar.Toggle id='Mobile-Nav-Button'/>
                <Navbar.Collapse className='justify-content-end'>
                    <Nav id="Mobile-Collapse" className='mx-0 px-0'>
                        <Nav.Link href="#" id='Login' className='Nav-Link pr-sm-3'>Login</Nav.Link>
                        <Nav.Link href="#" id='Sign-up' className='Nav-Link pl-sm-3'>Sign-up</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header;