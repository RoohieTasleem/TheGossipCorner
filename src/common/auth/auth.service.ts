import { Injectable } from '@angular/core';
import { throwError, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, map, tap } from "rxjs/operators";
import { Modal } from 'bootstrap';

import { Router } from "@angular/router";

import { User } from './user.model';

export interface AuthResData {
  "userId": string,
  "password": string,
  "username": string,
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  user = new BehaviorSubject<User>(null!);
  private tokenExpirationTimer: any;
  private expiresIn: number = 3600; //seconds (session will expire in 60 mins)

  constructor(private router: Router, private httpClient: HttpClient) { }

  // login
  login(userId: string, password: string) {
    return this.httpClient.get<AuthResData[]>("assets/userData.json").pipe(catchError(this.handleError), map(resData => {
      let logedInUser: Array<AuthResData> = null!;
      const expirationData = new Date(new Date().getTime() + this.expiresIn * 1000);
      if (resData) {
        logedInUser = resData.filter((eachUser: AuthResData) => {
          return eachUser.userId === userId && eachUser.password === password;
        });
      }

      if (logedInUser.length > 0) {
        const logedUser = new User(logedInUser[0].userId, logedInUser[0].username, expirationData);
        localStorage.setItem('userData', JSON.stringify(logedUser));
        this.autologout(this.expiresIn * 1000);
        this.user.next(logedUser);
        return { user: this.user, isLoginSuccess: true };
      }
      return { err: 'Username or password is incorrect', isLoginSuccess: false};
    }));
  }

  private handleError(errorRes: any) {
    let errorMsg: string = "Unknown issue occured, Try again later";
    return throwError(errorMsg);
  }

  // logout
  logout() {
    this.user.next(null!);
    this.router.navigate(['/home']);
    localStorage.removeItem('userData');
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }

  // auto login on page refresh and reset the session for 60mins
  autoLogin() {
    const userData: {
      userId: string;
      username: string;
      _tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem('userData')!);
    if (!userData) {
      return;
    }
    const loadedUser = new User(userData.userId, userData.username, new Date(new Date().getTime() + this.expiresIn * 1000));

    if (loadedUser) {
      this.user.next(loadedUser);
      this.autologout(this.expiresIn * 1000);
    }
  }

  // autologout 
  autologout(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
      const sessionModalElement = document.getElementById('sessionModal') as HTMLElement;
      const sessionModal = new Modal(sessionModalElement);
      sessionModal.show();
    }, expirationDuration);
  }

}
