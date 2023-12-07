import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget/CartWidget';


const NavBarComponent = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
        <Navbar.Brand href="#home">Top Shelf Drinks Miami</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Plans & Prices</Nav.Link>
            <NavDropdown title="Services" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Portable Bar</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
                Bar Trailer
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Bartender Services</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
                Request a quote!
            </NavDropdown.Item>
            </NavDropdown>
        </Nav>
        </Navbar.Collapse>
        <CartWidget />
    </Container>
    </Navbar>
    )
}

export default NavBarComponent