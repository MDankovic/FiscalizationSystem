import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from '../models/company';
import { User } from '../models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
})
export class CompanyComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'));

    this.userService
      .getCompanyByUserame(this.user.username)
      .subscribe((company: Company) => {
        if (company) {
          this.company = company;
        } else this.message = 'Bad data';
      });
  }

  company: Company;
  user: User;

  message: string;

  register() {
    this.userService.register(this.company).subscribe((user: User) => {
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        alert('OK');
      } else this.message = 'Bad data';
    });
  }

  getCompany() {
    this.userService.register(this.company).subscribe((user: User) => {
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        alert('OK');
      } else this.message = 'Bad data';
    });
  }
}
