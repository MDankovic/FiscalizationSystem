import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export interface ProductInterface extends mongoose.Document {
    naziv: String
}

let Product = new Schema({
    naziv: {
        type: String
    }
})

export default mongoose.model<ProductInterface>('Product', Product, 'proizvodi');