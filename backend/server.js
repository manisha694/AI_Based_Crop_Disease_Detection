import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";
import path from "path";
import fs from "fs";

import postRoutes from "./routes/postRoutes.js";
import diseaseRoutes from "./routes/diseaseRoutes.js";
import diseaseSearchRoutes from "./routes/diseaseSearch_routes.js";



const envPath = path.resolve(process.cwd(), "server", ".env");
console.log("Looking for .env at:", envPath);
dotenv.config({ path: envPath });

if (fs.existsSync(envPath)) {
  console.log(".env file found");
  dotenv.config({ path: envPath });
} else {
  console.error(".env file not found at:", envPath);
}

console.log("GEMINI_API_KEY after dotenv.config:", process.env.GEMINI_API_KEY || "undefined");





import mongoose from "mongoose";

dotenv.config();

const app = express();
const PORT = 5000;

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {

})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));
app.use("/api/diseases",diseaseSearchRoutes)
app.use("/api/posts", postRoutes);
app.use("/get-disease-info", diseaseRoutes);

// Load Gemini API Key
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
if (!GEMINI_API_KEY) {
  console.error(" Gemini API Key is missing in .env file!");
  process.exit(1);
}

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

// Chatbot Route
app.post("/chat", async (req, res) => {
  try {
    const userMessage = req.body.message;
    if (!userMessage) {
      return res.status(400).json({ reply: "❌ No message provided!" });
    }

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      systemInstruction:
        "You are an AI chatbot specializing in plants and gardening. Provide short and clear answers (maximum 20 words). If needed, summarize key points in bullet format.",
    });

    const result = await model.generateContentStream({
      contents: [{ role: "user", parts: [{ text: userMessage }] }],
    });

    let reply = "";
    for await (const chunk of result.stream) {
      reply += chunk.candidates?.[0]?.content?.parts?.[0]?.text || "";
    }

    res.json({ reply: reply.trim() || "Sorry, I couldn't process that." });
  } catch (error) {
    console.error(" Error with Gemini API:", error);
    res.status(500).json({ reply: "Error processing request!" });
  }
});


app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});