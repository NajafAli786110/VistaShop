import { FaTrashAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { CART_FLASH, CART_REMOVE_ITEM } from "../features/cartReducer";

export const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems);

  const handleRemove = (id) => {
    dispatch(CART_REMOVE_ITEM({id}));
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
        Your Cart
      </h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-300 text-xl">
          Your cart is empty.
        </p>
      ) : (
        cartItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center p-4 mb-4 bg-white dark:bg-gray-800 shadow-md rounded-lg"
          >
            <div className="flex items-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover mr-4"
              />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                {item.name}
              </h3>
            </div>
            <div className="flex items-center">
              <p className="text-lg font-semibold text-gray-800 dark:text-white mr-4">
                ${item.price}
              </p>
              <button
                onClick={() => handleRemove(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                <FaTrashAlt size={20} />
              </button>
            </div>
          </div>
        ))
      )}

      {cartItems.length > 0 && (
        <div className="flex gap-2">
          <button className=" bg-blue-500 text-white py-2 px-4 mt-4 rounded-lg hover:bg-blue-600 transition-colors">
            Proceed to Checkout
          </button>
          <button
            onClick={() => dispatch(CART_FLASH())}
            className=" bg-red-600 text-white py-2 px-4 mt-4 rounded-lg hover:bg-red-500 transition-colors"
          >
            Delete Cart Items
          </button>
        </div>
      )}
    </div>
  );
};
