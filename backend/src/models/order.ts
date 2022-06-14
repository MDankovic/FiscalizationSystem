import mongoose from 'mongoose';
import { ExtraInterface } from '../models/extra';
import { UserInterface } from './user';

const Schema = mongoose.Schema;

interface OrderInterface extends mongoose.Document{
    idN: Number
    proizvod: String
    kupac: String
    dodaci: Array<ExtraInterface>
    datum: String
    status: String
    user: UserInterface
}


let Order = new Schema({
    idN: {
        type: Number
    },
    proizvod: {
        type: String
    },
    kupac: {
        type: String
    },
    dodaci: {
        type: Array
    },
    datum: {
        type: String
    },
    status: {
        type: String
    },
    user: {
        type: Object
    }
})



export default mongoose.model<OrderInterface>('Order', Order, 'narudzbine');