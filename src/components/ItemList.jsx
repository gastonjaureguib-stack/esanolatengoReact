import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import ItemCard from './ItemCard'

const ItemList = ({ items }) => {

  return (

    <Row className="g-4">

      {
        items.map((item) => (

          <Col
            key={item.id}
            sm={12}
            md={6}
            lg={3}
          >

            <ItemCard
              id={item.id}
              name={item.name}
              price={item.price}
              category={item.category}
              img={item.img}
              description={item.description}
            />

          </Col>

        ))
      }

    </Row>
  )
}

export default ItemList