import dbConnect from "@/lib/dbConnect";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Glow Pure | Products",
};

export default async function products() {
  const productsCollection = await dbConnect("products");
  const featureProducts = await productsCollection.find({}).toArray();
  return (
    <section className="px-4 lg:px-10 my-16">
      <h2 className="text-center text-4xl lg:text-5xl font-semibold">
        Explore Our Full Collection
      </h2>
      <p className="mt-2 mb-4 text-center text-slate-500">
        From radiant skincare to bold beauty essentials — discover everything
        GlowPure has to offer
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {featureProducts.map((product) => (
          <div
            key={product._id}
            className="bg-background rounded-lg shadow-sm hover:scale-105 hover:duration-300 transition p-2 dark:border dark:border-gray-500"
          >
            <Link href={`/productDetails/${product._id}`}>
              <div className="relative w-full h-48 mb-4">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <h3 className="text-lg font-semibold text-primary">
                {product.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-foreground mt-1">
                {product.description.slice(0, 60)}...
              </p>
              <div className="mt-2 flex justify-between items-center">
                <span className="text-base font-bold text-foreground">
                  ${product.price}
                </span>
                <span className="text-xs bg-secondary dark:bg-foreground text-black px-2 py-1 rounded">
                  {product.category}
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
