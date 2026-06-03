import Card from 'react-bootstrap/Card';

import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {

  const { addItem } = useContext(CartContext);

  // 🔥 AHORA RECIBE CANTIDAD REAL
  const handleAddToCart = (quantity) => {
    addItem(item, quantity);
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

            <p style={{
              color: '#6c757d',
              textTransform: 'uppercase',
              letterSpacing: '2px'
            }}>
              {item.category}
            </p>

            <Card.Title style={{
              fontSize: '3rem',
              fontWeight: '700',
              marginBottom: '20px',
              color: '#1f3b2c'
            }}>
              {item.name}
            </Card.Title>

            <Card.Text style={{
              fontSize: '1.1rem',
              lineHeight: '1.8',
              color: '#4b4b4b'
            }}>
              {item.description}
            </Card.Text>

            <h2 style={{
              marginTop: '30px',
              color: '#8b6f47',
              fontWeight: '700'
            }}>
              ${item.price}
            </h2>

            <p style={{
              marginTop: '10px',
              color: '#6c757d'
            }}>
              Stock disponible: {item.stock}
            </p>

            {/* 🔥 COUNT REAL CONECTADO */}
            <ItemCount
              stock={item.stock}
              initial={1}
              onAdd={handleAddToCart}
            />

          </Card.Body>

        </div>

      </div>

    </Card>
  );
};

export default ItemDetail;