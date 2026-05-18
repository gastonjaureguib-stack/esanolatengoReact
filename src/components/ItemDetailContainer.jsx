import { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'

import products from '../mock/Productos.json'

import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(true)

  // Captura el ID desde la URL
  const { itemId } = useParams()

  // Simulación de promesa
  const getProductById = () => {

    return new Promise((resolve) => {

      setTimeout(() => {

        resolve(
          products.find(
            (product) => product.id === itemId
          )
        )

      }, 2000)

    })
  }

  useEffect(() => {

    getProductById()

      .then((response) => {
        setItem(response)
      })

      .catch((error) => {
        console.log(error)
      })

      .finally(() => {
        setLoading(false)
      })

  }, [itemId])

  return (

    <div className="container my-5">

      {
        loading
          ? (
            <h2 className="text-center text-light">
              Cargando detalle...
            </h2>
          )
          : (
            <ItemDetail item={item} />
          )
      }

    </div>
  )
}

export default ItemDetailContainer