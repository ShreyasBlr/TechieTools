import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import products from "./data/products.js";

import productsRouter from "./routes/productRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

const port = process.env.PORT || 5500;
connectDB(); // Connect to MongoDB
const app = express();

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/products", productsRouter);

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.use(notFound); // Middleware for handling 404 errors
app.use(errorHandler); // Middleware for handling other errors

app.listen(port, () => console.log(`Server running on port ${port}`));
