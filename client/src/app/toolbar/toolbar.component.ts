import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthDialogComponent } from '../auth-dialog/auth-dialog.component';
import { Angular2TokenService } from 'angular2-token';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.sass']
})
export class ToolbarComponent implements OnInit {

  @ViewChild('authDialog') authDialog: AuthDialogComponent;

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  logOut() {
    this.authService.logOutUser().subscribe(() => this.router.navigate(['/']));
  }

  presentAuthDialog(mode?: 'login' | 'register'){
    this.authDialog.openDialog(mode);
  }

}
