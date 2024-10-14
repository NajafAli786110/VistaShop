import { IoIosClose } from "react-icons/io";

export default function PopupModal({ message, setPopup }) {
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
