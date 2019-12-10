import { environment } from '../../../../environments/environment';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReplaySubject } from 'rxjs';

import { Account } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class AccountApiService {
  private currentAccount: Account = new Account();
  private apiUrl = 'https://upacademytinder.herokuapp.com/api/users';

  constructor(
    private http: HttpClient,
  ) { }

  public isAuthenticated(): boolean {
    if (this.currentAccount.id) {
      return true;
    } else {
      return false;
    }
  }

  public setCurrentAccount(account) {
    this.currentAccount = account;
  }

  public getCurrentId(): number {
    return this.currentAccount.id;
  }

  public getCurrentName(): string {
    return this.currentAccount.name;
  }

  public login(account: Account) {
    if (environment.production) {
      // Simulate Jax-rs Api request
      if (account.email === 'admin' && account.password === 'admin') {
        account.id = 1;
        account.name = 'Ze Carlos';
        this.currentAccount = account;
      }
      const response: ReplaySubject<any> = new ReplaySubject(1);
      if (account.id) {
        response.next(account);
      } else {
        response.error({ msg: 'Deu erro' });
      }
      return response;
    } else {
      // Request to Jax-rs Api
      return this.http.get(this.apiUrl + '?filter={"where":{"username":"Cortes"}}')
    }
  }

  public logout() {
    this.currentAccount = null;
  }
}
