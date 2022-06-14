import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { User } from './models/user';
import { Company } from './models/company';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  uri = 'http://localhost:4000';

  user: User;

  login(username: string, password: string){
    const data={
      username: username,
      password: password
    }

    return this.http.post(`${this.uri}/users/login`, data);
  }

  register(company: Company){
    const data={
      company: company
    }

    return this.http.post(`${this.uri}/users/login`, data);
  }

  getByUserame(username: string) {
    const data={
      username: username,
    }

    return this.http.post(`${this.uri}/users/getByUsername`, data);
  }

  getCompanyByUserame(username: string) {
    const data={
      username: username,
    }

    return this.http.post(`${this.uri}/users/getCompanyByUsername`, data);
  }

  setUser(u: User) {
    this.user = u;
  }

  getUser() {
    return this.user;
  }
}
