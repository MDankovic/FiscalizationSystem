import express from "express";
import { OrderController } from "../controllers/order.controller";
const orderRouter = express.Router();

orderRouter
  .route("/add")
  .post((req, res) => new OrderController().add(req, res));

orderRouter
  .route("/getAll")
  .post((req, res) => new OrderController().getAll(req, res));

orderRouter
  .route("/getAllForUsername")
  .post((req, res) => new OrderController().getAllForUsername(req, res));

orderRouter
  .route("/updateStatus")
  .post((req, res) => new OrderController().updateStatus(req, res));

export default orderRouter;
