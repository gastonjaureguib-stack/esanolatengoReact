import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import ItemCount from './ItemCount';

import Swal from 'sweetalert2';

function CatalogoCard({ id, name, price, img, category, stock }) {

  const { addItem } = useContext(CartContext);

  const [showCount, setShowCount] = useState(false);

  const handleAdd = (quantity) => {

    const item = {
      id,
      name,
      price,
      img,
      stock
    };

    addItem(item, quantity);

    Swal.fire({
      icon: 'success',
      title: 'Producto agregado',
      text: `${quantity} unidad(es) de ${name} añadidas al carrito`,
      confirmButtonColor: '#c19a6b',
      background: '#002b2b',
      color: '#f3e5ab',
      timer: 1800,
      showConfirmButton: false
    });

    setShowCount(false);
  };

  return (
    <Card
      className="h-100 shadow-sm"
      style={{
        width: '100%',
        backgroundColor: '#002b2b',
        color: '#f3e5ab',
        border: '1px solid #c19a6b',
        borderRadius: '12px'
      }}
    >

      <Card.Img
        variant="top"
        src={img}
        alt={name}
        style={{
          height: '220px',
          objectFit: 'cover',
          borderRadius: '12px 12px 0 0'
        }}
      />

      <Card.Body className="d-flex flex-column text-center">

        <Card.Title className="fw-bold">
          {name}
        </Card.Title>

        <Card.Text
          style={{
            color: '#c19a6b',
            fontSize: '0.9rem'
          }}
        >
          {category?.toUpperCase()}
        </Card.Text>

        <Card.Text className="fs-4 fw-bold">
          ${price}
        </Card.Text>

        {!showCount ? (
          <Button
            className="mt-auto fw-bold"
            style={{
              backgroundColor: '#c19a6b',
              border: 'none',
              color: '#004444'
            }}
            onClick={() => setShowCount(true)}
            disabled={stock === 0}
          >
            Añadir al carrito
          </Button>
        ) : (
          <ItemCount
            stock={stock}
            initial={1}
            onAdd={handleAdd}
          />
        )}

      </Card.Body>

    </Card>
  );
}

export default CatalogoCard;