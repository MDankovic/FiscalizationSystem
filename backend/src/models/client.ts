import mongoose from "mongoose";

export interface ClientInterface extends mongoose.Document {
  pib: string;
  days: number;
  rebate: number;
}
