import { useEffect, useState } from 'react'

import Container from 'react-bootstrap/Container'

import ItemList from './ItemList'

import products from '../mock/Productos.json'

const ItemListContainer = () => {

  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  // Simulación de promesa
  const getProducts = () => {

    return new Promise((resolve) => {

      setTimeout(() => {
        resolve(products)
      }, 2000)

    })
  }

  useEffect(() => {

    getProducts()
      .then((response) => {


        const featuredProducts = response.filter(
          (item) => item.featured === true
        )

        setItems(featuredProducts)

      })

      .catch((error) => {
        console.log(error)
      })

      .finally(() => {
        setLoading(false)
      })

  }, [])

  return (

    <Container className="my-5">

      <h2
        className="text-center mb-5"
        style={{
          color: '#f3e5ab',
          textTransform: 'uppercase',
          letterSpacing: '2px'
        }}
      >
        Plantas Destacadas
      </h2>

      {
        loading
          ? <h3 className="text-center text-light">Cargando plantas...</h3>
          : <ItemList items={items} />
      }

    </Container>
  )
}

export default ItemListContainer