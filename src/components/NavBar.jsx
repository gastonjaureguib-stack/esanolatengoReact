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

            <NavDropdown
              title="VARIEDADES"
              id="basic-nav-dropdown"
              className="custom-dropdown"
            >

              <NavDropdown.Item
                as={Link}
                to="/category/interior"
              >
                Interior
              </NavDropdown.Item>

              <NavDropdown.Item
                as={Link}
                to="/category/exterior"
              >
                Exterior
              </NavDropdown.Item>

              <NavDropdown.Item
                as={Link}
                to="/category/exoticas"
              >
                Exóticas
              </NavDropdown.Item>

              <NavDropdown.Divider />

              <NavDropdown.Item
                as={Link}
                to="/category/insumos"
              >
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