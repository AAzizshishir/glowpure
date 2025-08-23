import Link from "next/link";
import React from "react";
import Links from "./Links";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-4 lg:px-10 h-12 bg-secondary sticky left-0 top-0 z-50">
      {/* Logo */}
      <Link href={"/"} className="text-3xl lg:text-4xl font-bold text-primary">
        GlowPure
      </Link>
      {/* Links */}
      <Links />

      {/* Button */}
      <Button className={"bg-primary text-white font-semibold text-base"}>
        Login
      </Button>
    </nav>
  );
}
