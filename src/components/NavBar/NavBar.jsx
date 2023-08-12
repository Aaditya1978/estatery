import { Container, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import "./NavBar.scss";
import logo from "../../assets/logo.jpeg";

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" fixed="top" className="nav">
      <Container>
        <Navbar.Brand className="logo">
          <img src={logo} alt="logo" />
          <h1>Estatery</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="nav-links me-auto">
            <Nav.Link className="nav-link active" href="#">
              Rent
            </Nav.Link>
            <Nav.Link className="nav-link" href="#">
              Buy
            </Nav.Link>
            <Nav.Link className="nav-link" href="#">
              Sell
            </Nav.Link>
            <NavDropdown title="Manage Property" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#">Apartment</NavDropdown.Item>
              <NavDropdown.Item href="#">House</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Resources" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#">About</NavDropdown.Item>
              <NavDropdown.Item href="#">Contact</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="nav-btns">
            <Button className="nav-btn btn-1">Login</Button>
            <Button className="nav-btn btn-2">Sign up</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
