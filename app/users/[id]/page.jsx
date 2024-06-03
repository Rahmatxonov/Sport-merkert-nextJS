import Image from "next/image";
import React from "react";

const SinglePage = ({ params }) => {
  const userList = [
    {
      id: 1,
      name: "John",
      age: 36,
    },
    {
      id: 2,
      name: "Garry",
      age: 36,
    },
    {
      id: 3,
      name: "Piter",
      age: 36,
    },
    {
      id: 4,
      name: "Jorg",
      age: 36,
    },
    {
      id: 5,
      name: "Glue",
      age: 36,
    },
  ];

  function getOne(arr) {
    const data = arr.find((item) => item.id === params.id);
    return data;
  }

  const singleData = getOne(userList);

  return (
    <div>
      <Image
        style={{ width: "150px", height: "150px" }}
        src={"/user.jfif"}
        alt="user"
      />
      <span>
        <p>Name: {singleData.name}</p>
        <p>Age: {singleData.age}</p>
      </span>
    </div>
  );
};

export default SinglePage;
