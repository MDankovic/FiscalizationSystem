import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.error = false;
  }

  username: string;
  password: string;

  message: string;
  error: boolean;

  login() {
    this.userService
      .login(this.username, this.password)
      .subscribe((user: User) => {
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.error = false;
          this.router.navigate(['/company']);
        } else this.error = true;
      });
  }
}
