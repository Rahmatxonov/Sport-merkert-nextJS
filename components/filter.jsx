"use client";

import React, { useState } from "react";
import {
  Box,
  Slider,
  TextField,
  MenuItem,
  Select,
  Button,
} from "@mui/material";
import Image from "next/image";

const Filter = () => {
  const [priceRange, setPriceRange] = useState([3000, 40000]);
  const [article, setArticle] = useState("");
  const [category, setCategory] = useState("All");
  const [isNew, setIsNew] = useState("All");
  const [isOnSale, setIsOnSale] = useState("All");

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const handleSubmit = () => {
    console.log({
      priceRange,
      article,
      category,
      isNew,
      isOnSale,
    });
  };

  return (
    <div className="bg-[#F2F2F2]">
      <div className="container flex items-center space-x-2">
        <span className="flex items-center space-x-2 mt-[40px]">
          <Image
            src="/home.svg"
            style={{ width: "20px", height: "20px" }}
            width={0}
            height={0}
            alt="home"
          />
          <p>Главная</p>
        </span>
        <span className="flex items-center space-x-2 mt-[40px]">
          <Image
            src="/arrow-left.svg"
            style={{ width: "20px", height: "20px" }}
            width={0}
            height={0}
            alt="arrow"
          />
          <p>Продукты</p>
        </span>
      </div>
      <Box
        sx={{
          width: 300,
          padding: 2,
          border: "1px solid #ccc",
          borderRadius: "8px",
          marginTop: "40px",
        }}
      >
        <Box>
          <span>Цена</span>
          <Slider
            value={priceRange}
            onChange={handlePriceChange}
            valueLabelDisplay="auto"
            min={3000}
            max={40000}
            sx={{ marginTop: 2, marginBottom: 2 }}
          />
        </Box>
        <TextField
          label="Артикул"
          value={article}
          onChange={(e) => setArticle(e.target.value)}
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        <Select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          fullWidth
          sx={{ marginBottom: 2 }}
        >
          <MenuItem value="All">Все</MenuItem>
          <MenuItem value="Category1">Category 1</MenuItem>
          <MenuItem value="Category2">Category 2</MenuItem>
        </Select>
        <Select
          value={isNew}
          onChange={(e) => setIsNew(e.target.value)}
          fullWidth
          sx={{ marginBottom: 2 }}
        >
          <MenuItem value="All">Все</MenuItem>
          <MenuItem value="Yes">Новинка</MenuItem>
          <MenuItem value="No">Нет</MenuItem>
        </Select>
        <Select
          value={isOnSale}
          onChange={(e) => setIsOnSale(e.target.value)}
          fullWidth
          sx={{ marginBottom: 2 }}
        >
          <MenuItem value="All">Все</MenuItem>
          <MenuItem value="Yes">Акция</MenuItem>
          <MenuItem value="No">Нет</MenuItem>
        </Select>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          fullWidth
        >
          Показать результат
        </Button>
      </Box>
    </div>
  );
};

export default Filter;
