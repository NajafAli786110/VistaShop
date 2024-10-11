import React from "react";
import { ProductCard } from "../components";
import { ProductList } from "../data/ProductLists";


const Home = () => {
  const products = ProductList;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <main className="container mx-auto p-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
