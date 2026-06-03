import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Link, useParams } from 'react-router-dom';

import '../css/Categorias.css';

const Categorias = () => {

  const { categoria } = useParams();

  const listaCategorias = [
    { id: 1, nombre: 'Interior', path: 'interior', img: '/img/botonsecciones/plantasdeinterior.png' },
    { id: 2, nombre: 'Exterior', path: 'exterior', img: '/img/botonsecciones/plantasdeexterior.png' },
    { id: 3, nombre: 'Exóticas', path: 'exoticas', img: '/img/botonsecciones/exoticas.png' },
    { id: 4, nombre: 'Insumos', path: 'insumos', img: '/img/botonsecciones/insumos.png' },
  ];

  return (
    <Container className="my-5 py-4">

      <h2 className="text-center mb-4 categoria-titulo-seccion">
        Elige por Categoría
      </h2>

      <Row className="g-4">

        {listaCategorias.map((cat) => {

          const activo = categoria === cat.path;

          return (
            <Col key={cat.id} xs={6} md={3}>

              <div className={`categoria-item ${activo ? 'activo' : ''}`}>

                <img
                  src={cat.img}
                  alt={cat.nombre}
                  className="categoria-img"
                />

                <div className="categoria-overlay">

                  <Link
                    to={`/tienda/${cat.path}`}
                    className="btn-categoria"
                  >
                    {cat.nombre}
                  </Link>

                </div>

              </div>

            </Col>
          );
        })}

      </Row>

    </Container>
  );
};

export default Categorias;