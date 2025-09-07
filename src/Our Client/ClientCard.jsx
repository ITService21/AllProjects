import React from "react";

const ClientCard = ({ imageSrc, clientName }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 w-64 sm:w-72 hover:scale-105 hover:shadow-2xl transition-transform duration-300 ease-in-out border border-gray-200">
      <div className="h-24 flex items-center justify-center mb-4">
        <img
          src={imageSrc}
          alt={clientName}
          className="h-full max-w-full object-contain"
        />
      </div>
      <h3 className="text-lg font-semibold text-gray-800 text-center">
        {clientName}
      </h3>
    </div>
  );
};

export default ClientCard;
