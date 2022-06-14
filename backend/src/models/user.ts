import mongoose from 'mongoose'

const Schema = mongoose.Schema;


export interface UserInterface extends mongoose.Document {
    username: String
    password: String
    type: String
}

let User = new Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    type: {
        type: String
    }
})


export default mongoose.model<UserInterface>('User', User, 'User');