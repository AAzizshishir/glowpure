"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

export default function Links() {
  const { data: session, status } = useSession();
  return (
    <ul className="flex gap-3 text-black dark:text-white text-lg">
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href={"/products"}>Products</Link>
      </li>
      {status === "authenticated" && (
        <li>
          <Link href={"/addProduct"}>Add Product</Link>
        </li>
      )}
    </ul>
  );
}
