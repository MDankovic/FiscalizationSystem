import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export interface ExtraInterface extends mongoose.Document {
    naziv: String
}

let Extra = new Schema({
    naziv:{
        type: String
    }
})


export default mongoose.model<ExtraInterface>('Extra', Extra, 'dodaci');