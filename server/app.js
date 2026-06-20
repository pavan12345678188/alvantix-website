import express from "express";
import cors from "cors";
import dotenv from "dotenv";


dotenv.config();


import contactRoutes from "./routes/contact.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/contact",contactRoutes)

// Test Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "🚀 Alvantix Backend Server is Running Successfully!",
  });
});

// Server
const PORT = process.env.PORT || 5173;

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});