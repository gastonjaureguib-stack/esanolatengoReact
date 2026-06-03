import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { collection, getDocs } from "firebase/firestore";

import CatalogoCard from '../components/CatalogoCard';
import { db } from "../service/firebase";

import '../css/Tienda.css';

const Tienda = () => {

  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const getProductos = async () => {

      const colRef = collection(db, "items");
      const snapshot = await getDocs(colRef);

      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      setProductos(data);
      setLoading(false);
    };

    getProductos();

  }, []);

  const interior = productos.filter(p => p.category === "interior");
  const exterior = productos.filter(p => p.category === "exterior");
  const exoticas = productos.filter(p => p.category === "exoticas");

  if (loading) {
    return (
      <h2 style={{ color: "white", textAlign: "center", marginTop: "50px" }}>
        Cargando catálogo...
      </h2>
    );
  }

  return (
    <main className="tienda-container">
      <Container>

        <h1 className="titulo-principal">NUESTRO CATÁLOGO</h1>

        {/* INTERIOR */}
        <h2 className="titulo-seccion">Plantas de Interior</h2>
        <Row className="g-4 mb-5">
          {interior.map(p => (
            <Col key={p.id} xs={12} sm={6} md={4} lg={3}>
              <CatalogoCard {...p} />
            </Col>
          ))}
        </Row>

        {/* EXTERIOR */}
        <h2 className="titulo-seccion">Plantas de Exterior</h2>
        <Row className="g-4 mb-5">
          {exterior.map(p => (
            <Col key={p.id} xs={12} sm={6} md={4} lg={3}>
              <CatalogoCard {...p} />
            </Col>
          ))}
        </Row>

        {/* EXÓTICAS */}
        <h2 className="titulo-seccion">Plantas Exóticas</h2>
        <Row className="g-4">
          {exoticas.map(p => (
            <Col key={p.id} xs={12} sm={6} md={4} lg={3}>
              <CatalogoCard {...p} />
            </Col>
          ))}
        </Row>

      </Container>
    </main>
  );
};

export default Tienda;