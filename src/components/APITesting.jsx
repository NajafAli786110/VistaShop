import React, { useEffect, useState } from "react";
import { FetchProducts } from "../api/api";

export default function APITesting() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const getResponse = await FetchProducts();
        setProducts(getResponse);
        setLoading(false);
      } catch (error) {
        console.log("Error: " + error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <h1>Product List</h1>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <img src={product.image} alt={product.title} width="100" />
          </div>
        ))}
      </div>
    </>
  );
}
