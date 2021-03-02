import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  get name() {
    return this.signupForm.get('name');
  }
  get email() {
    return this.signupForm.get('email');
  }

  get password() {
    return this.signupForm.get('password');
  }

  get phone() {
    return this.signupForm.get('phone');
  }

  get passcode() {
    return this.signupForm.get('passcode');
  }
  public errorMessages = {
    name: [
      { type: 'required', message: 'Name is required' },
      {
        type: 'maxlength',
        message: 'Name can not be longer than 30 characters',
      },
    ],
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
    phone: [
      { type: 'required', message: 'Phone number is required' },
      { type: 'pattern', message: 'Please enter a valid phone number' },
    ],
    passcode: [
      { type: 'required', message: 'Passcode number is Required' },
      {
        type: 'minLength',
        message: 'Please enter a valid passcode',
      },
    ],
  };
  signupForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(30)]),

    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z0-9.-]$'),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(30),
    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$'),
    ]),
    passcode: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });
  constructor(public authService: AuthService) {}

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

  submit() {
    if (this.signupForm.invalid) {
      return;
    }
    this.authService.createUser(
      this.signupForm.value.name,
      this.signupForm.value.email,
      this.signupForm.value.password,
      this.signupForm.value.phone,
      this.signupForm.value.passcode
    );
    console.log(this.signupForm.value);
  }
}
