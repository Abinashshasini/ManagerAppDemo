import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginPageModule } from './login.module';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }

  public errorMessages = {
    email: [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Please enter a valid email address' },
    ],
    password: [
      { type: 'required', message: 'Password is required' },
      {
        type: 'minlength',
        message: 'password minimum length 8',
      },
      {
        type: 'maxlength',
        message: 'password maximum length 30',
      },
    ],
  };

  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$'),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(30),
    ]),
  });

  constructor(
    private loginPage: LoginPageModule,
    private router: Router,
    public authService: AuthService
  ) {}
  ngOnInit() {}

  showPassword = false;
  passwordToggle = 'eye-outline';
  togglePassword(): void {
    this.showPassword = !this.showPassword;
    if (this.passwordToggle == 'eye-outline') {
      this.passwordToggle = 'eye-off-outline';
    } else {
      {
        this.passwordToggle = 'eye-outline';
      }
    }
  }

  gotoList() {
    this.router.navigate(['/home']);
  }

  onLogin() {
    if (this.loginForm.invalid) {
      return;
    }
    this.authService.login(
      this.loginForm.value.email,
      this.loginForm.value.password
    );
  }
}
