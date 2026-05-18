import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/Categorias.css';

const Categorias = () => {
  const listaCategorias = [
    { id: 1, nombre: 'Interior', img: '/img/botonsecciones/plantasdeinterior.png' },
    { id: 2, nombre: 'Exterior', img: '/img/botonsecciones/plantasdeexterior.png' },
    { id: 3, nombre: 'Exóticas', img: '/img/botonsecciones/exoticas.png' },
    { id: 4, nombre: 'Insumos', img: '/img/botonsecciones/insumos.png' },
  ];

  return (
    <Container className="my-5 py-4">
      <h2 className="text-center mb-4 categoria-titulo-seccion">Elige por Categoría</h2>
      <Row className="g-4">
        {listaCategorias.map((cat) => (
          <Col key={cat.id} xs={6} md={3}>
            <div className="categoria-item">
              <img src={cat.img} alt={cat.nombre} className="categoria-img" />
              <div className="categoria-overlay">
                <button className="btn-categoria">{cat.nombre}</button>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Categorias;