import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import type { Product } from "../types/product";
import { CartContext } from "../context/CartContext";
import { singleProduct } from "../api/productApi";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addCart } = useContext(CartContext);
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const fetchProduct = async (productId: string) => {
    // const data = await singleProduct(productId);
    // console.log(data);
    // setProduct(data);
    try {
      setLoading(true);
      const data = await singleProduct(productId);
      setProduct(data);
    } catch (e) {
      console.error("Failed to fetch product:", e);
      setError((e as Error).message || "Failed to fetch product");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchProduct(id);
    }
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  // if (error) {
  //   return <div className="error">{error}</div>;
  // }
  // if (!product) return <h2>No Product Found</h2>;

  return (
    <>
      <Navbar />
      <div className="detail-page">
        <button className="back-btn" onClick={() => navigate("/")}>
          ← Back
        </button>
        {!product ? (
          <div
            className="d-flex align-items-center justify-content-center"
            style={{ height: "100vh" }}
          >
            <h2>No Product Found</h2>
          </div>
        ) : (
          <div className="detail-card">
            <img src={product.images[0]} alt={product.title} />

            <div className="detail-content">
              <h1>{product.title}</h1>

              <p>{product.description}</p>

              <h2>${product.price}</h2>

              <button className="cart-btn" onClick={() => addCart(product)}>
                Add To Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductDetail;
