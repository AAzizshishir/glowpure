import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import Image from "next/image";
import React, { use } from "react";

export default async function productDetails({ params }) {
  const { productId } = params;
  const collection = await dbConnect("products"); // ✅ await here
  const product = await collection.findOne({ _id: new ObjectId(productId) });

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative w-full h-96">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover rounded-lg border border-gray-300"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold text-primary dark:text-dark.primary">
            {product.title}
          </h1>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            {product.description}
          </p>

          <div className="mt-6 space-y-2">
            <p className="text-xl font-semibold text-foreground">
              ${product.price}
            </p>
            <p className="text-sm text-gray-700">
              Category: {product.category}
            </p>
            <p className="text-sm text-gray-700">Brand: {product.brand}</p>
            <p className="text-sm text-gray-700">Rating: ⭐ {product.rating}</p>
            <p className="text-sm text-gray-700">In Stock: {product.stock}</p>
          </div>

          <div className="mt-4 flex gap-2 flex-wrap">
            {product.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-secondary text-black px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
