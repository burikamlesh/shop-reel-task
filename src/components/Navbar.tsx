import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router';

const Navbar: React.FC = () => {
  const { totalItems } = useContext(CartContext);
  return (
    <header className='navbar'>
      <Link to='/' className='logo'>
        ShopCart
      </Link>

     <nav className='nav-links'>
          <Link to='/'>Home</Link>

          <Link to='/cart' className='cart-link'>
            🛒 Cart

            <span className='cart-count'>
              {totalItems}
            </span>
          </Link>
        </nav>
    </header>
  )
}

export default Navbar