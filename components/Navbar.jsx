"use client";
import Link from "next/link";
import React from "react";
import Links from "./Links";
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session, status } = useSession();

  return (
    <nav className="flex items-center justify-between px-4 lg:px-10 h-12 bg-secondary sticky left-0 top-0 z-50">
      {/* Logo */}
      <Link href={"/"} className="text-3xl lg:text-4xl font-bold text-primary">
        GlowPure
      </Link>
      {/* Links */}
      <Links />

      <div className="flex items-center gap-2">
        <p className="hidden md:block">{session?.user?.email}</p>
        {status === "authenticated" ? (
          <>
            <Button
              onClick={() => signOut()}
              className={
                "bg-primary text-white font-semibold text-base cursor-pointer"
              }
            >
              Logout
            </Button>
          </>
        ) : (
          <Link href={"/login"}>
            <Button
              className={
                "bg-primary text-white font-semibold text-base cursor-pointer"
              }
            >
              Login
            </Button>
          </Link>
        )}
      </div>
    </nav>
  );
}
