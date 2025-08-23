import Link from "next/link";
import React from "react";
import Links from "../Links";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-4 lg:px-10 h-12 bg-[#A8D5BA]">
      {/* Logo */}
      <Link
        href={"/"}
        className="text-3xl lg:text-4xl font-bold text-[#345A46]"
      >
        GlowPure
      </Link>
      {/* Links */}
      <Links />

      {/* Button */}
      <Button className={"bg-[#345A46] text-white font-semibold text-base"}>
        Login
      </Button>
    </nav>
  );
}
