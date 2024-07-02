import express from "express";
import cors from "cors";
import { config } from "dotenv";
import connectDB from "./db/DB";
config();

// config
const PORT = process.env.PORT || 8080;
const app = express();

// database connection
connectDB();


// middlewares
app.use(cors());
app.use(express.json());

// routes

