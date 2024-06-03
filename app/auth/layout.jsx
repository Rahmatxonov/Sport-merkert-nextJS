"use client";
import Link from "next/link";

function layout({ children }) {
  return (
    <div>
      <div className="flex items-center justify-center p-10 space-x-5">
        <Link href={"/auth/login"}>Login</Link>
        <Link href={"/auth/register"}>Register</Link>
      </div>
      {children}
    </div>
  );
}

export default layout;
