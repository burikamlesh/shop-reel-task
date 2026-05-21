import React, { useEffect, useState } from "react";
import type { Product } from "../types/product";
import { useSearchParams } from "react-router";
import { getProducts } from "../api/productApi";
import FilterSidebar from "../components/FilterSidebar";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const category = searchParams.get("category") || "";

  useEffect(() => {
    fetchProducts();
  }, [category]);

  const fetchProducts = async () => {
    try {
      setLoading(true);

      const data = await getProducts(category);

      setProducts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const setSelectedCategory = (value: string) => {
    if (value) {
      setSearchParams({ category: value });
    } else {
      setSearchParams({});
    }
  };

  return (
    <>
      <Navbar />

      <div className="home-container">
        <FilterSidebar
          selectedCategory={category}
          setSelectedCategory={setSelectedCategory}
        />

        <div className="products-section">
          <div className="heading-row">
            <h1>Products</h1>
          </div>

          {loading ? (
            <Loader />
          ) : (
            <div className="product-grid">
              {products.length > 0 ? (
                products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))
              ) : (
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{ height: "100vh" }}
                >
                  <h2>No Product Found</h2>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
