import Image from "next/image";
import Link from "next/link";

const Users = () => {
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
      name: "Jorj",
      age: 36,
    },
    {
      id: 5,
      name: "Glue",
      age: 36,
    },
  ];

  return (
    <div>
      {userList.map((item) => (
        <ul key={item.id}>
          <Link href={`/users/${item.id}`}>
            <Image
              width={150}
              height={150}
              src="/user.jfif"
              alt={`Picture of ${item.name}`}
            />
            <span>
              <h3>Name: {item.name}</h3>
              <p>Age: {item.age}</p>
            </span>
          </Link>
        </ul>
      ))}
    </div>
  );
};

export default Users;
