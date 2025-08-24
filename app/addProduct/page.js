"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import Swal from "sweetalert2";

export default function AddProductForm() {
  const { data: session } = useSession();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const rawTags = formData.get("tags");
    const tagsArray = rawTags.split(",").map((tag) => tag.trim());

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      image: formData.get("image"),
      title: formData.get("title"),
      description: formData.get("description"),
      price: formData.get("price"),
      category: formData.get("category"),
      brand: formData.get("brand"),
      rating: formData.get("rating"),
      stock: formData.get("stock"),
      tags: tagsArray,
    };

    try {
      const res = await fetch("http://localhost:3000/api/service", {
        method: "POST",
        body: JSON.stringify(data),
      });
      const postedResponse = await res.json();
      Swal.fire({
        icon: "success",
        title: "Service Added!",
        text: "Your service has been posted successfully.",
        timer: 2000,
        showConfirmButton: false,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong while posting.",
      });
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto space-y-6 p-6 bg-background border rounded-lg"
    >
      <h2 className="text-2xl font-bold text-foreground">Add New Product</h2>

      <div className="space-y-2">
        <Label htmlFor="image">Name</Label>
        <Input
          id="name"
          name="name"
          defaultValue={session?.user?.name}
          type="text"
          readOnly
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="image">Email</Label>
        <Input
          id="email"
          name="email"
          defaultValue={session?.user?.email}
          type="text"
          readOnly
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="image">Image URL</Label>
        <Input id="image" name="image" type="text" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="title">Title</Label>
        <Input id="title" name="title" type="text" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea id="description" name="description" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="price">Price ($)</Label>
        <Input id="price" name="price" type="number" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="category">Category</Label>
        <Input id="category" name="category" type="text" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="brand">Brand</Label>
        <Input id="brand" name="brand" type="text" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="rating">Rating</Label>
        <Input
          id="rating"
          name="rating"
          defaultValue={4.0}
          readOnly
          type="number"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="stock">Stock</Label>
        <Input id="stock" name="stock" type="number" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="tags">Tags (comma-separated)</Label>
        <Input id="tags" name="tags" type="text" />
      </div>

      <Button type="submit" className="w-full cursor-pointer">
        Post Product
      </Button>
    </form>
  );
}
