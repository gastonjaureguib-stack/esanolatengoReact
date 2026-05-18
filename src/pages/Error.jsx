import Button from 'react-bootstrap/Button'

import { Link } from 'react-router-dom'

const Error = () => {

  return (

    <div
      className="d-flex flex-column justify-content-center align-items-center text-center"
      style={{
        minHeight: '80vh',
        color: '#f3e5ab'
      }}
    >

      <h1
        style={{
          fontSize: '6rem',
          fontWeight: '700'
        }}
      >
        404
      </h1>

      <h2 className="mb-4">
        Página no encontrada
      </h2>

      <p
        style={{
          maxWidth: '500px',
          marginBottom: '30px'
        }}
      >
        La planta que estás buscando no existe o fue movida.
      </p>

      <Button
        as={Link}
        to="/"
        style={{
          backgroundColor: '#8b6f47',
          border: 'none',
          padding: '12px 30px'
        }}
      >
        Volver al inicio
      </Button>

    </div>
  )
}

export default Error