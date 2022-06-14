import { AddressInterface } from "./address";
import { CashRegisterInterface } from "./cashRegister";
import { ClientInterface } from "./client";
import { StorageInterface } from "./storage";

import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export interface CompanyInterface extends mongoose.Document {
    username : string;
    firstName : string;
    lastName : string;
    password : string;
    phone : string;
    email : string;
    companyName : string;
    address : AddressInterface;
    pib : string;
    idNum : string;
    photo : string;
    category : number;
    inPDV : number;
    bankAccounts : string[];
    storages : Array<StorageInterface>;
    cashRegisters : Array<CashRegisterInterface>;
    clients : Array<ClientInterface>;
}


let Company = new Schema({
    username : {
        type: String
    },
    firstName : {
        type: String
    },
    lastName : {
        type: String
    },
    password : {
        type: String
    },
    phone : {
        type: String
    },
    email : {
        type: String
    },
    companyName : {
        type: String
    },
    address : {
        type: Object
    },
    pib : {
        type: String
    },
    idNum : {
        type: String
    },
    photo : {
        type: String
    },
    category : {
        type: String
    },
    inPDV : {
        type: String
    },
    bankAccounts : {
        type: Array
    },
    storages : {
        type: Array
    },
    cashRegisters : {
        type: Array
    },
    clients : {
        type: Array
    }
});


export default mongoose.model<CompanyInterface>('Company', Company, 'Company');