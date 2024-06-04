"use client";

import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const CardList = () => {
  const [products, setProducts] = useState([]);
  const [expandedProduct, setExpandedProduct] = useState(null);

  useEffect(() => {
    axios("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const toggleReadMore = (productId) => {
    setExpandedProduct(expandedProduct === productId ? null : productId);
  };

  const renderLabel = (label) => {
    return label ? <div>{label}</div> : null;
  };

  return (
    <div className="container">
      <h2 className="pt-[111px] font-semibold text-[32px]">
        Реконмендуемые продукты
      </h2>
      <div className="flex items-center justify-center space-x-5 mt-10 pb-[200px]">
        {products.slice(0, 4).map((product) => (
          <div
            key={product.id}
            className="relative border p-4 rounded-lg shadow-lg w-[350px] h-auto"
          >
            {renderLabel(product.label)}
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover mb-4"
            />
            <h2 className="text-lg font-semibold mb-1">{product.title}</h2>
            {product.oldPrice && (
              <p className="text-gray-400 line-through mb-1">
                {product.oldPrice} UZS
              </p>
            )}
            <p
              className={`text-gray-800 font-bold mb-2 ${
                product.label === "Акция" ? "text-red-500" : ""
              }`}
            >
              {product.price} UZS
            </p>
            <p className="text-sm text-gray-600">
              {expandedProduct === product.id
                ? product.description
                : `${product.description.slice(0, 100)}...`}
            </p>
            <button
              className="text-blue-500 text-sm"
              onClick={() => toggleReadMore(product.id)}
            >
              {expandedProduct === product.id ? "Read Less" : "Read More"}
            </button>
            <Link href={"/single"}>
              <button className="flex items-center justify-center space-x-2 mt-4 bg-yellow-400 text-black p-2 rounded w-full">
                <img
                  src="/korzina.svg"
                  alt="board"
                  className="w-5 h-5 object-cover"
                />
                <p> Корзина</p>
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardList;
