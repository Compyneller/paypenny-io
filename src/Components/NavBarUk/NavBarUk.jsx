import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import uk from "../../Assets/1200px-Flag_of_the_United_Kingdom.png";
import eu from "../../Assets/download.png";
import logo from "../../Assets/oie_jR70dqGTa1A5.png";

const NavBarUk = () => {
  return (
    <Navbar variant="dark" expand="lg" style={{ background: "#000" }}>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="" height={60} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/uk">
              <img
                src={uk}
                alt=""
                height={40}
                width={40}
                style={{ objectFit: "cover", borderRadius: "5px" }}
              />
            </Nav.Link>
            <Nav.Link as={Link} to="/eu">
              <img
                src={eu}
                height={40}
                width={40}
                alt=""
                style={{ objectFit: "cover", borderRadius: "5px" }}
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarUk;
