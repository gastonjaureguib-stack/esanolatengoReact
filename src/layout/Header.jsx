import '../css/Header.css'
import { Link } from 'react-router-dom'

import NavBar from '../components/NavBar'
import CartWidget from '../components/CartWidget'

const Header = () => {
  return (
    <header className="main-header">

      <div className="header-container">

        <Link to="/" className="logo">
          <img
            src="/img/imglogo.png"
            alt="Logo de la tienda"
            className="logo-image"
          />
        </Link>

        <NavBar />

        <CartWidget />

      </div>

    </header>
  )
}

export default Header