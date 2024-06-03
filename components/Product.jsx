"use client";

import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios("https://fakestoreapi.com/products")
      .then((res) => {
        const productLabel = res.data.map((product, index) => {
          if (index % 3 === 0) {
            product.label = "Акция";
            product.oldPrice = (product.price * 1.5).toFixed(2);
          } else if (index % 3 === 1) {
            product.label = "Новый";
          } else if (index % 3 === 2) {
            product.label = "ТОП";
          }
          return product;
        });
        setProducts(productLabel);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  }, []);

  const renderLabel = (label) => {
    switch (label) {
      case "Акция":
        return (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            Акция
          </span>
        );
      case "Новый":
        return (
          <span className="absolute top-2 left-2 bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded">
            Новый
          </span>
        );
      case "ТОП":
        return (
          <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
            ТОП
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto p-4 bg-[#F2F2F2]">
      <div className="mt-[40px] flex items-center justify-between mb-4">
        <span>
          <select className="px-5 py-3 rounded-md">
            <option>Сортировать</option>
          </select>
          <select className="px-5 py-3 rounded-md">
            <option>Все продукты</option>
          </select>
        </span>
        <span className="flex items-center space-x-5">
          <button className="flex items-center space-x-2">
            <p>Кард</p>
            <Image
              src="/board.svg"
              style={{ width: "20px", height: "20px" }}
              width={0}
              height={0}
              alt="board"
            />
          </button>
          <button className="flex items-center space-x-2">
            <p>Лист</p>
            <Image
              src="/list.svg"
              style={{ width: "20px", height: "20px" }}
              width={0}
              height={0}
              alt="list"
            />
          </button>
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative border p-4 rounded-lg shadow-lg"
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
            <p className="text-gray-800 font-bold mb-2">{product.price} UZS</p>
            <p className="text-sm text-gray-600">{product.description}</p>
            <button className="mt-4 bg-yellow-400 text-white p-2 rounded w-full">
              Корзина
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
