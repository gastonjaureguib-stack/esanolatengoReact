import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Container, Row, Col } from 'react-bootstrap';
import { collection, getDocs } from "firebase/firestore";

import CatalogoCard from '../components/CatalogoCard';
import { db } from "../service/firebase";

import '../css/Tienda.css';

const Tienda = () => {

  const { categoria } = useParams();

  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const getProductos = async () => {

      try {

        const colRef = collection(db, "items");

        const snapshot = await getDocs(colRef);

        const data = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        setProductos(data);

      } catch (error) {

        console.log("Error cargando productos:", error);

      } finally {

        setLoading(false);

      }

    };

    getProductos();

  }, []);

  // Si hay categoría filtra
  // Si no hay categoría muestra todos
  const productosFiltrados = categoria
    ? productos.filter(
        (producto) => producto.category === categoria
      )
    : productos;

  if (loading) {

    return (
      <h2
        style={{
          color: "white",
          textAlign: "center",
          marginTop: "50px"
        }}
      >
        Cargando catálogo...
      </h2>
    );

  }

  return (

    <main className="tienda-container">

      <Container>

        <h1 className="titulo-principal">

          {
            categoria
              ? categoria.toUpperCase()
              : "NUESTRO CATÁLOGO"
          }

        </h1>

        <Row className="g-4">

          {productosFiltrados.map((p) => (

            <Col
              key={p.id}
              xs={12}
              sm={6}
              md={4}
              lg={3}
            >

              <CatalogoCard {...p} />

            </Col>

          ))}

        </Row>

      </Container>

    </main>

  );

};

export default Tienda;