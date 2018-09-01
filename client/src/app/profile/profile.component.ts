import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';
import { Angular2TokenService } from 'angular2-token';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

  public name = "poo";
  public email;
  public username;

  constructor(
              public authTokenService: Angular2TokenService,
              public authService: AuthService,
              private router: Router
  ) { }

  ngOnInit() {
    // this.name = this.getName();
    // this.email = this.getEmail();
    // this.username = this.getUsername();
  }

  getName() {
    return this.authTokenService.currentUserData.name;
  }

  getEmail() {
    return this.authTokenService.currentUserData.email;
  }

  getUsername() {
    return this.authTokenService.currentUserData.nickname;
  }

  logOut() {
    this.authService.logOutUser().subscribe(() => this.router.navigate(['/']));
  }

}
