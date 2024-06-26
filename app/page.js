// import Link from "next/link";

// export default function Home() {
//   return (
//     <ul className="flex items-center justify-center p-10 space-x-5">
//       <li>
//         <Link href={"/dashboard"}>Dashboard</Link>
//       </li>
//       <li>
//         <Link href={"/users"}>Users</Link>
//       </li>
//       <li>
//         <Link href={"/about"}>About</Link>
//       </li>
//     </ul>
//   );
// }

import CardList from "@/components/CardList";
import Product from "@/components/Product";
import Filter from "@/components/filter";

export default function Home() {
  return (
    <div className="bg-[#F2F2F2]">
      <div className="flex justify-between">
        <Filter />
        <Product />
      </div>
      <div>
        <CardList />
      </div>
    </div>
  );
}
