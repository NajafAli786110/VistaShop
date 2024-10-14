import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CART_FLASH } from "../features/cartReducer";

export const Checkout = () => {
  const dispatch = useDispatch();
  const CurrentCartItems = useSelector((state) => state.cartItems);
  const [formData, setFormData] = useState({
    fullName: "",
    number: "",
    address: "",
    city: "",
    zipCode: "",
  });

  const onChangeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    // Check if form fields are empty
    if (
      formData.fullName === "" ||
      formData.number === "" ||
      formData.address === "" ||
      formData.city === "" ||
      formData.zipCode === ""
    ) {
      alert("Please fill all the fields");
      return;
    }

    // Clear form and cart items
    setFormData({
      fullName: "",
      number: "",
      address: "",
      city: "",
      zipCode: "",
    });
    dispatch(CART_FLASH()); // Clears cart after checkout
  };

  // Calculate total price
  let totalAmount = 0;
  CurrentCartItems.forEach((items) => (totalAmount += items.price));

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      {CurrentCartItems.length > 0 ? (
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
            Checkout
          </h2>

          {/* Billing Information */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Billing Information
            </h3>
            <form className="space-y-4" onSubmit={onSubmitHandler}>
              <div>
                <label
                  className="block text-gray-700 dark:text-gray-300 mb-2"
                  htmlFor="name"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={onChangeHandler}
                  placeholder="John Doe"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg dark:bg-gray-900 dark:text-white"
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 dark:text-gray-300 mb-2"
                  htmlFor="phone"
                >
                  Phone Number
                </label>
                <input
                  type="number"
                  id="phone-number"
                  name="number"
                  value={formData.number}
                  onChange={onChangeHandler}
                  placeholder="+92 317 251 6088"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg dark:bg-gray-900 dark:text-white"
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 dark:text-gray-300 mb-2"
                  htmlFor="address"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={onChangeHandler}
                  placeholder="1234 Main St"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg dark:bg-gray-900 dark:text-white"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    className="block text-gray-700 dark:text-gray-300 mb-2"
                    htmlFor="city"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={onChangeHandler}
                    placeholder="New York"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg dark:bg-gray-900 dark:text-white"
                  />
                </div>
                <div>
                  <label
                    className="block text-gray-700 dark:text-gray-300 mb-2"
                    htmlFor="zip"
                  >
                    ZIP Code
                  </label>
                  <input
                    type="text"
                    id="zip"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={onChangeHandler}
                    placeholder="10001"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg dark:bg-gray-900 dark:text-white"
                  />
                </div>
              </div>
              <button
                type="submit"
                className=" py-2 px-6 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Order Summary
            </h3>
            <div className="space-y-2">
              {CurrentCartItems.map((items) => (
                <div key={items.id} className="flex justify-between">
                  <p className="text-gray-700 dark:text-gray-300">
                    {items.name}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    ${items.price.toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-semibold text-gray-800 dark:text-white">
                Total
              </p>
              <p className="text-lg font-semibold text-gray-800 dark:text-white">
                ${totalAmount.toFixed(2)}
              </p>
            </div>
          </div>

          {/* Checkout Button */}
          <div className="flex gap-2 items-center">
            <Link
              to="/shop"
              className="text-gray-600 dark:text-gray-300 hover:underline"
            >
              Continue Shopping
            </Link>
            <button
              onClick={() => dispatch(CART_FLASH())}
              className=" py-2 px-6 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors"
            >
              Complete Purchase
            </button>
          </div>
        </div>
      ) : (
        <>
          <p className="text-gray-700 dark:text-white mb-4">Cart is Empty</p>
          <Link
            className=" py-2 px-6 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors"
          >
            Go to Shop
          </Link>
        </>
      )}
    </div>
  );
};
