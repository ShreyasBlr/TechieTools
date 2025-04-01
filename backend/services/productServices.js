import Product from "../models/productModel.js";

const getAllProducts = async () => {
  const products = await Product.find({});
  return products;
};

const getProductById = async (productId) => {
  const product = await Product.findById(productId);
  return product;
};

export default {
  getAllProducts,
  getProductById,
};
