"use server";

import dbConnect from "@/lib/dbConnect";
import bcrypt from "bcrypt";

export default async function loginUser(payload) {
  const { email, password } = payload;

  const userCollection = await dbConnect("users");
  const user = await userCollection.findOne({ email });

  if (!user) return null;
  const isPasswordOk = await bcrypt.compare(password, user.password);
  if (!isPasswordOk) return null;

  return user;
}
