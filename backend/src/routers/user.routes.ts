import express from "express";
import { UserController } from "../controllers/user.controller";
const userRouter = express.Router();

userRouter
  .route("/login")
  .post((req, res) => new UserController().login(req, res));

userRouter
  .route("/getByUsername")
  .post((req, res) => new UserController().getByUsername(req, res));

userRouter
  .route("/getCompanyByUsername")
  .post((req, res) => new UserController().getCompanyByUsername(req, res));

export default userRouter;
