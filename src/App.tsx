


import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import { ROUTES } from './Enums/Routes'
import Home from './pages/Home'
import Cart from './pages/Cart'
import ProductDetail from './pages/ProductDetail'
import { CartProvider } from './context/CartContext'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  

  return (
    <BrowserRouter>
      <CartProvider>
         <ToastContainer
      position='top-right'
      autoClose={2000}
      theme='colored'
    />
        <Routes>
           <Route path={ROUTES.Home} element={<Home />} /> 
          <Route path={ROUTES.ProductDetails} element={<ProductDetail />} /> 
          <Route path={ROUTES.Cart} element={<Cart />} /> 
        </Routes>

        </CartProvider>
      </BrowserRouter>
   
  )
}

export default App
