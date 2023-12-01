// pages/api/register.js

import { connectToDatabase } from "../api/example";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password, confirmPassword, termsAgreed } = req.body;

    // Perform validation on the form data (e.g., check passwords match, validate email, etc.)
    // ...

    // If validation passes, proceed to save the user data in the database
    const { db } = await connectToDatabase();

    // Insert user data into MongoDB
    const result = await db.collection("users").insertOne({
      email,
      password,
      termsAgreed,
    });

    res.status(201).json({ message: "Registration successful", result });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
