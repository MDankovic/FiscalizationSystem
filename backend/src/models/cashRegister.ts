import mongoose from "mongoose";

export interface CashRegisterInterface extends mongoose.Document {
  location : string;
  type : string
}
