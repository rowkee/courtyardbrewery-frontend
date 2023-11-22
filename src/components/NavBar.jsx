import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";


export default function NavBar() {

  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("access_token") !== null) {
      setIsAuth(true);
    }
  }, [isAuth]); 

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Courtyard Brewery</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Our Locations" id="basic-nav-dropdown">
              <NavDropdown.Item href="/our-locations/brewery">The Brewery</NavDropdown.Item>
              <NavDropdown.Item href="/our-locations/halstead">Halstead</NavDropdown.Item>
              <NavDropdown.Item href="/our-locations/sudbury">Sudbury</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/beers">Our Beers</Nav.Link>
            <Nav.Link href="/about-us">About us</Nav.Link>
          </Nav>
          <Nav>
            {isAuth ? (
              <Nav.Link href="/logout">Logout</Nav.Link>
            ) : (
              <>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/signup">Sign Up</Nav.Link>
              </>
            )}
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
