import { BrowserRouter, Routes, Route } from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './layout/Header'
import Footer from './layout/Footer';

import Home from './pages/Home';

import ItemDetailContainer from './components/ItemDetailContainer'
import Error from './pages/Error'

function App() {
  return (
    <BrowserRouter>
      <div style={{ background: '#004444', minHeight: '100vh' }}>
        <Header /> 

        <Routes>
          {/* RUTA PARA EL INDEX */}
          <Route path="/" element={<Home />} />
          {/* RUTA PARA EL DETALLE DE CADA PRODUCTO */}
          <Route path="/item/:itemId" 
          element={<ItemDetailContainer />} />
          <Route path="*" element={<Error />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App;
