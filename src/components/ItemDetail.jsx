import Card from 'react-bootstrap/Card';

import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { CartContext } from '../context/CartContext';
import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {

  const { addItem } = useContext(CartContext);

  const [added, setAdded] = useState(false);

  const handleAddToCart = (quantity) => {

    addItem(item, quantity);

    setAdded(true);
  };

  return (
    <Card
      className="shadow-lg border-0"
      style={{
        backgroundColor: '#f8f5ef',
        borderRadius: '20px',
        overflow: 'hidden'
      }}
    >

      <div className="row g-0">

        {/* Imagen */}
        <div className="col-md-6">

          <img
            src={item.img}
            alt={item.name}
            className="img-fluid h-100 w-100"
            style={{
              objectFit: 'cover',
              maxHeight: '700px'
            }}
          />

        </div>

        {/* Información */}
        <div className="col-md-6 d-flex align-items-center">

          <Card.Body className="p-5">

            <p
              style={{
                color: '#6c757d',
                textTransform: 'uppercase',
                letterSpacing: '2px'
              }}
            >
              {item.category}
            </p>

            <Card.Title
              style={{
                fontSize: '3rem',
                fontWeight: '700',
                marginBottom: '20px',
                color: '#1f3b2c'
              }}
            >
              {item.name}
            </Card.Title>

            <Card.Text
              style={{
                fontSize: '1.1rem',
                lineHeight: '1.8',
                color: '#4b4b4b'
              }}
            >
              {item.description}
            </Card.Text>

            <h2
              style={{
                marginTop: '30px',
                color: '#8b6f47',
                fontWeight: '700'
              }}
            >
              ${item.price}
            </h2>

            <p
              style={{
                marginTop: '10px',
                color: '#6c757d'
              }}
            >
              Stock disponible: {item.stock}
            </p>

            {item.stock === 0 ? (

              <div className="mt-4">

                <h5
                  style={{
                    color: '#dc3545',
                    fontWeight: 'bold'
                  }}
                >
                  ❌ Producto sin stock
                </h5>

              </div>

            ) : !added ? (

              <ItemCount
                stock={item.stock}
                initial={1}
                onAdd={handleAddToCart}
              />

            ) : (

              <div className="mt-4">

                <h5
                  style={{
                    color: '#198754',
                    marginBottom: '15px'
                  }}
                >
                  Producto agregado al carrito ✓
                </h5>

                <div className="d-flex gap-2">

                  <Link
                    to="/cart"
                    className="btn btn-success"
                  >
                    Ir al carrito
                  </Link>

                  <Link
                    to="/tienda"
                    className="btn btn-outline-secondary"
                  >
                    Seguir comprando
                  </Link>

                </div>

              </div>

            )}

          </Card.Body>

        </div>

      </div>

    </Card>
  );
};

export default ItemDetail;