import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Login } from '../models/user';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token: string;
  getToken() {
    this.token;
  }

  createUser(
    name: string,
    email: string,
    password: string,
    phone: number,
    passcode: number
  ) {
    const authData: User = {
      name: name,
      email: email,
      password: password,
      phone: phone,
      passcode: passcode,
    };
    this.http
      .post('http://localhost:5000/api/users/signup', authData)
      .subscribe((response) => {
        console.log(response);
      });
  }
  login(email: string, password: string) {
    const logindata: Login = {
      email: email,
      password: password,
    };
    this.http
      .post<{ token: string }>(
        'http://localhost:5000/api/users/login',
        logindata
      )
      .subscribe((response) => {
        const token = response.token;
        this.token = token;
        console.log(response);
        if (token) {
          this.router.navigate(['/home']);
        }
      });
  }
  logout() {
    this.token = null;
  }

  constructor(private http: HttpClient, private router: Router) {}
}
