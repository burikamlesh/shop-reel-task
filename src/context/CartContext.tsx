import {
  createContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';
import type { Product } from '../types/product';

import { toast } from 'react-toastify';

interface CartContextType {
  cart: Product[];
  addCart: (product: Product) => void;
  removeCart: (id: number) => void;
  totalItems: number;
  totalPrice: number;
}

export const CartContext = createContext<CartContextType>(
  {} as CartContextType
);



export const CartProvider = ({ children }: { children: ReactNode }) => {
 
  const [cart, setCart] = useState<Product[]>(() => {
      const data = localStorage.getItem('cart');
    return data ? JSON.parse(data) : [];
    }); 
   
  const addCart = (product: Product) => {
       const exists = cart.find((item) => item.id === product.id);
        if (exists) {
      toast.error('Product already in cart');
        return;
      } else {
         toast.success('Product added to cart');
        setCart((prev) => [...prev, product]);
    }
    
  };
   const removeCart = (id: number) => {
      setCart((prev) => prev.filter((item) => item.id !== id));
      toast.success('Product removed from cart');
  };     
 

  const totalItems = cart.length;
  const totalPrice = cart.reduce((acc, item) => {
    return acc + item.price;
  }, 0);
  

   useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);  

  return (
    <CartContext.Provider
      value={{
        cart,
        addCart,
        removeCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
  

 
    
    
 
  