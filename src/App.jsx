import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './layout/Header';
import Footer from './layout/Footer';

import Home from './pages/Home';
import ItemDetailContainer from './components/ItemDetailContainer';
import Error from './pages/Error';
import Tienda from './pages/Tienda';
import Cart from './components/Cart'; // 👈 AGREGAR

import { CartProvider } from './context/CartContext';
import Checkout from './components/Checkout';


function App() {
  return (
    <CartProvider>
      <BrowserRouter>

        <div style={{ background: '#004444', minHeight: '100vh' }}>
          
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />

            <Route
              path="/item/:itemId"
              element={<ItemDetailContainer />}
            />

            <Route path="/tienda" element={<Tienda />} />
            <Route path="/tienda/:categoria" element={<Tienda />} />

            {/* 🛒 CART */}
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<Error />} />
            
          </Routes>

          <Footer />

        </div>

      </BrowserRouter>
    </CartProvider>
  );
}

export default App;