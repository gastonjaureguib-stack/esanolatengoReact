import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'

import { Link } from 'react-router-dom'

import '../css/ItemCard.css'

const ItemCard = ({
  id,
  name,
  price,
  category,
  img,
  description
}) => {

  return (

    <Card className="producto-card h-100">

      <Card.Img
        variant="top"
        src={img}
        className="producto-img"
      />

      <Card.Body>

        <Card.Title className="producto-titulo">
          {name}
        </Card.Title>

        <Card.Text className="producto-descripcion">
          {description}
        </Card.Text>

      </Card.Body>

      <ListGroup className="list-group-flush">

        <ListGroup.Item className="producto-info">
          Categoría: {category}
        </ListGroup.Item>

        <ListGroup.Item className="producto-precio">
          ${price}
        </ListGroup.Item>

      </ListGroup>

      <Card.Body className="text-center">

        <Button
          as={Link}
          to={`/item/${id}`}
          className="btn-camel"
        >
          Ver detalle
        </Button>

      </Card.Body>

    </Card>
  )
}

export default ItemCard