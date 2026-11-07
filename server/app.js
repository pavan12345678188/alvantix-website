import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import contactRoutes from "./routes/contact.js";

dotenv.config();

const app = express();

// Middleware
app.use(
  cors({
    origin: [
      "https://alvantix.in",
      "https://www.alvantix.in",
      "http://localhost:3000",
    ],
  })
);

app.use(express.json());

// Contact API
app.use("/api/contact", contactRoutes);

// Test Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "🚀 Alvantix Backend Server is Running Successfully!",
  });
});

// Health Check
app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    service: "Alvantix Backend",
    status: "healthy",
  });
});

// Server
const PORT = process.env.PORT || 5173;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Alvantix Backend running on port ${PORT}`);
});