import mongoose from "mongoose";

export interface StorageInterface extends mongoose.Document {
  storageId: number;
  storageName: string;
}
