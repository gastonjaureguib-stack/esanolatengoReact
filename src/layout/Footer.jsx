import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import { FaInstagram, FaFacebook, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import '../css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <Container>
        <Row className="align-items-center py-5">
          {}
          <Col md={4} className="text-center text-md-start mb-4 mb-md-0">
            <h4 className="footer-slogan">Llenemos el mundo de plantas.</h4>
            <p className="footer-location">
              <FaMapMarkerAlt className="me-2" /> Rocha - Uruguay
            </p>
          </Col>

          {/* Navbar del Footer */}
          <Col md={4} className="mb-4 mb-md-0">
            <Nav className="flex-column align-items-center">
              <Nav.Link href="" className="footer-link">Inicio</Nav.Link>
              <Nav.Link href="" className="footer-link">Tienda</Nav.Link>
              <Nav.Link href="" className="footer-link">Comunidad</Nav.Link>
              <Nav.Link href="" className="footer-link">Contacto</Nav.Link>
            </Nav>
          </Col>

          {/* Redes y Mapa */}
          <Col md={4} className="text-center text-md-end">
            <div className="social-buttons mb-3">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon"><FaInstagram /></a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon"><FaFacebook /></a>
              <a href="https://wa.me/tu-numero" target="_blank" rel="noreferrer" className="social-icon"><FaWhatsapp /></a>
            </div>
            <a 
              href="https://www.google.com/maps/place/Rocha,+Uruguay" 
              target="_blank" 
              rel="noreferrer" 
              className="btn-mapa"
            >
              Ver en Google Maps
            </a>
          </Col>
        </Row>
        
        <div className="footer-bottom text-center py-3">
          <small>© 2026 Proyecto React Gastón Jaureguiberry</small>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;