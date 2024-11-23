import React from "react";
const Modal = ({ isOpen, onClose, message }) => {
  if (!isOpen) return null; // Don't render if the modal is not open
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-1/3">
        <h2 className="text-3xl font-bold mb-4 text-center">Notice</h2>
        <p className="text-gray-700 mb-4 text-center font-bold text-xl">{message}</p>
        <button
          onClick={onClose}
          className="bg-emerald-500  w-1/5 ml-24 lg:ml-52 text-white px-2 py-2 rounded hover:bg-blue-500"
        >
         Close
        </button>
      </div>
    </div>
  );
};
export default Modal;