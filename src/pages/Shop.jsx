import { useState, useEffect } from "react";
import { ProductCard } from "../components";
import { useCustomContext } from "../context/AppContext";
import { nanoid } from "@reduxjs/toolkit";

export const Shop = () => {
  const { products } = useCustomContext();
  const [inputSearch, setInputSearch] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const uniqueCategoriesFilter = [
      ...new Set(products.map((item) => item.category)),
    ].map((category) => ({
      id: nanoid(),
      name: category,
    }));

    setCategories(uniqueCategoriesFilter);
  }, [products]);

  const filteredProducts = products.filter((product) => {
    if (
      product.title.toLowerCase().includes(inputSearch.toLowerCase()) ||
      product.category.toLowerCase().includes(inputSearch.toLowerCase())
    ) {
      return product;
    }
  });

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <main className="container mx-auto p-4">
        <div className="flex gap-8">
          <div className="flex flex-col gap-4">
            {/* Search Input */}
            <input
              type="search"
              name="search_product"
              id="search_product"
              placeholder="Search products..."
              value={inputSearch}
              onChange={(e) => setInputSearch(e.target.value)}
              className="outline-none bg-transparent py-3 px-8 border text-black border-s-black dark:text-white dark:border-s-white dark:border-[#ffffff6f]"
            />

            {/* Display Categories */}
            {categories.length > 0 ? (
              categories.map((category) => (
                <p
                  key={category.id}
                  className="text-black dark:text-white capitalize"
                >
                  {category.name}
                </p>
              ))
            ) : (
              <p className="text-black dark:text-white capitalize">
                No Category Found!
              </p>
            )}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <p className="text-black dark:text-white capitalize">
                No Product Found !..
              </p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};
