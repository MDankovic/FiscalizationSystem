import mongoose from "mongoose";

const Schema = mongoose.Schema;

export interface AddressInterface extends mongoose.Document {
  country: string;
  city: string;
  zip: number;
  street: string;
  streetNumber: number;
}
