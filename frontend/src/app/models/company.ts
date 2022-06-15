import { Address } from './address';
import { CashRegister } from './cashRegister';
import { Client } from './client';

export class Company {
  username: string;
  firstName: string;
  lastName: string;
  password: string;
  phone: string;
  email: string;
  companyName: string;
  address: Address;
  pib: string;
  idNum: string;
  photo: string;
  category: number;
  inPDV: number;
  bankAccounts: string[];
  storages: Storage[];
  cashRegisters: CashRegister[];
  clients: Client[];
}
