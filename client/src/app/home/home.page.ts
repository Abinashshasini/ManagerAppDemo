import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(
    public authService: AuthService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit() {}
  onLogout() {
    this.authService.logout;
    this.router.navigateByUrl('/');
  }
}
