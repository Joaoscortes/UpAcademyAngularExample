import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AccountApiService } from 'src/app/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public name: string;
  constructor(
    private router: Router,
    private accountApi: AccountApiService
  ) {
    this.name = accountApi.getCurrentName();
  }

  ngOnInit() { }

  public logout() {
    this.accountApi.logout();
    this.router.navigate(['/login']);
  }

}
