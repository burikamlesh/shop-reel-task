import React from 'react';
import type { Product } from '../types/product';
import { Link } from 'react-router';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
}) => {
  return (
    <div className='product-card'>
      <img
        src={product.images[0]}
        alt={product.title}
      />

      <div className='product-content'>
        <h3>{product.title}</h3>

        <p>${product.price}</p>

        <Link to={`/product/${product.id}`}>
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;