import express from "express";
import { ProductController } from "../controllers/product.controller";
const productRouter = express.Router();

productRouter
  .route("/getAll")
  .post((req, res) => new ProductController().getAll(req, res));

export default productRouter;
