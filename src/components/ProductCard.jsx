import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { CART_ADD_ITEM } from "../features/cartReducer";
import { Link } from "react-router-dom";
import PopupModal from "./PopupModal";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const [popup, setPopup] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <img
        className="w-full h-48 object-cover"
        src={product.image}
        alt={product.title}
      />
      <div className="p-4 flex flex-col gap-3">
        <div className="flex flex-col gap-3"></div>
        <Link to={`/product/${product.id}`}>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
            {product.title}
          </h3>
        </Link>
        <p className="text-gray-600 dark:text-gray-400">
          {product.description.length > 100
            ? `${product.description.substring(0, 50)}...`
            : product.description}
        </p>
        <p className="text-xl font-bold text-gray-800 dark:text-white">
          ${product.price}
        </p>
        <button
          onClick={() => {
            dispatch(
              CART_ADD_ITEM({
                image: product.image,
                name: product.title,
                price: product.price,
              })
            );

            setPopup(true);
          }}
          className="mt-2 w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700"
        >
          Add to Cart
        </button>
      </div>
      {/* Popup Modal Show */}
      {popup && (
        <PopupModal
          setPopup={setPopup}
          message="Your product has been added to the cart!"
        />
      )}
    </div>
  );
};

export default ProductCard;
