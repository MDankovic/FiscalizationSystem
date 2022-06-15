import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from '../models/address';
import { CashRegister } from '../models/cashRegister';
import { Company } from '../models/company';
import { User } from '../models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.company = new Company();
    this.company.address = new Address();
    this.company.cashRegisters = new Array<CashRegister>();
  }

  company: Company;

  message: string;

  register() {
    this.userService.register(this.company).subscribe((user: User) => {
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        alert('OK');
      } else this.message = 'Bad data';
    });
  }
}
