import { useParams } from "react-router-dom";
import { useCustomContext } from "../context/AppContext";
import { useDispatch } from "react-redux";
import { CART_ADD_ITEM } from "../features/cartReducer";



export const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { products } = useCustomContext();
  const ProductID = products.find((product) => product.id == id);

  // Check if the product was found
  if (!ProductID) {
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
        <p className="text-xl text-center text-red-500">Product not found!</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Product Image */}
          <div className="h-[450px] w-full object-contain md:w-1/2">
            <img
              src={ProductID.image}
              alt={ProductID.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Details */}
          <div className="md:w-1/2 p-6 flex flex-col gap-4">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
              {ProductID.title}
            </h1>
            <p className="text-gray-600 dark:text-gray-300 capitalize">
              {ProductID.description}
            </p>
            <p className="text-2xl font-semibold text-blue-600">
              ${ProductID.price}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 capitalize">
              {ProductID.category}
            </p>
            <button 
            onClick={dispatch(CART_ADD_ITEM({
              image: ProductID.image,
              name: ProductID.title,
              price: ProductID.price,
            }))}
            className="bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition-colors mt-4">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
