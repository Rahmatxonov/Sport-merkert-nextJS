"use client";

import { useRouter } from "next/router";
import React from "react";

const SinglePage = () => {
  const router = useRouter();
  const { product } = router.query;

  if (!product) {
    return <div>Loading...</div>;
  }

  const selectedProduct = JSON.parse(product);

  return (
    <div className="container">
      <h2 className="pt-[111px] font-semibold text-[32px]">
        {selectedProduct.title}
      </h2>
      <div className="flex items-center justify-center space-x-5 mt-10 pb-[200px]">
        <div className="relative border p-4 rounded-lg shadow-lg w-[350px] h-auto">
          <img
            src={selectedProduct.image}
            alt={selectedProduct.title}
            className="w-full h-48 object-cover mb-4"
          />
          {selectedProduct.oldPrice && (
            <p className="text-gray-400 line-through mb-1">
              {selectedProduct.oldPrice} UZS
            </p>
          )}
          <p
            className={`text-gray-800 font-bold mb-2 ${
              selectedProduct.label === "Акция" ? "text-red-500" : ""
            }`}
          >
            {selectedProduct.price} UZS
          </p>
          <p className="text-sm text-gray-600">{selectedProduct.description}</p>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
