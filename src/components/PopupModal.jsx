import { useEffect } from "react";
import { IoIosClose } from "react-icons/io";

export default function PopupModal({ message, setPopup }) {
  // Ye mainai useEffect likha takai jab bhi koi add to cart karay ga to set popup truw hoga or aik chota sa component 3 sec kai liyai dekhe ga.
  useEffect(() => {
    const timer = setTimeout(() => {
      setPopup(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm w-full transform transition-transform duration-300 ease-in-out">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold text-gray-800 dark:text-white">
            Alert
          </h2>
          <button
            onClick={() => setPopup(false)}
            className="text-gray-600 dark:text-gray-300 hover:text-red-600 transition duration-300"
          >
            <IoIosClose fontSize="30px" />
          </button>
        </div>
        <p className="mt-4 text-gray-600 dark:text-gray-300">{message}</p>
      </div>
    </div>
  );
}
