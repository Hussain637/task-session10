import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function MainNavbar() {
  return (
    <Navbar className='navber_style' expand="lg">
      <Container>
        <Navbar.Brand href="#home" className='nav_color'>Books in JAVASCRIPT</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='Navbar_Collapse'>
          <Nav className="me-auto ">
            <Nav.Link as={Link} to={"/"} className='nav_color'>Home</Nav.Link>
            <Nav.Link as={Link} to={"about"} className='nav_color'>about</Nav.Link>
            <Button as={Link} to={"admin"} className='btn_Admin_navbar nav_color'>Admin</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;