import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AccountApiService, Account } from '../core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public account: Account = new Account();
  public msg: string;

  constructor(
    private router: Router,
    private accountApi: AccountApiService
  ) {
    // Fill email and password
    this.account.email = 'admin';
    this.account.password = 'admin';
  }

  ngOnInit() { }

  public login() {
    this.accountApi.login(this.account).subscribe(
      (account: any) => {
        this.router.navigate(['/']);
      },
      (error) => {
        console.log(this.msg = error.msg);
      }
    );
  }
}
