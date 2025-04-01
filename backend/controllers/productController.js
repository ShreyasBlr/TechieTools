import ProductServices from "../services/productServices.js";
import asyncHandler from "../middleware/asyncHandler.js";

export const getAllProducts = asyncHandler(async (req, res) => {
  const products = await ProductServices.getAllProducts();
  res.json(products);
});

export const getProductById = asyncHandler(async (req, res) => {
  const productId = req.params.id;
  if (!productId) {
    res.status(400);
    throw new Error("Product ID is required");
  }
  const product = await ProductServices.getProductById(productId);
  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }
  res.status(200).json(product);
});
