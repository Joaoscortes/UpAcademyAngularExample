import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountApiService } from '../services/account-api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private accountApi: AccountApiService
  ) {}

  canActivate() {
    if (this.accountApi.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/login']);
    }
  }
}
