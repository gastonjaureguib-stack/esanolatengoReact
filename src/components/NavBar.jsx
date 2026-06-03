import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

import { Link } from 'react-router-dom'

import '../css/NavBar.css'

const NavBar = () => {
  return (
    <Navbar expand="lg" className="nav-principal">
      <Container>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto">

            {/* TIENDA GENERAL */}
            <Nav.Link
              as={Link}
              to="/"
              className="custom-nav-link"
            >
              Inicio
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/comunidad"
              className="custom-nav-link"
            >
              Comunidad
            </Nav.Link>

            {/* DROPDOWN CATEGORÍAS */}
            <NavDropdown
              title="VARIEDADES"
              id="basic-nav-dropdown"
              className="custom-dropdown"
            >

              <NavDropdown.Item as={Link} to="/tienda/interior">
                Interior
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/tienda/exterior">
                Exterior
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/tienda/exoticas">
                Exóticas
              </NavDropdown.Item>

              <NavDropdown.Divider />

              <NavDropdown.Item as={Link} to="/tienda/insumos">
                Insumos
              </NavDropdown.Item>

            </NavDropdown>

          </Nav>

        </Navbar.Collapse>

      </Container>
    </Navbar>
  )
}

export default NavBar