import ProductServices from "../services/productServices.js";
import asyncHandler from "../middleware/asyncHandler.js";

export const getAllProducts = asyncHandler(async (req, res) => {
  const products = await ProductServices.getAllProducts();
  res.json(products);
});

export const getProductById = asyncHandler(async (req, res) => {
  const productId = req.params.id;
  if (!productId) {
    return res.status(400).json({ message: "Product ID is required" });
  }
  const products = await ProductServices.getProductById(productId);
  res.json(products);
});
