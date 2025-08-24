"use client";
import Link from "next/link";
import React from "react";

export default function Links() {
  return (
    <ul className="flex gap-3 text-black text-lg">
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href={"/products"}>Products</Link>
      </li>
    </ul>
  );
}
