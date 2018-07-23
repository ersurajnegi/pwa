import { Injectable } from '@angular/core';

import { GoogleApiService, GoogleAuthService } from 'ng-gapi';
import GoogleUser = gapi.auth2.GoogleUser;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public static readonly SESSION_STORAGE_KEY: string = 'accessToken';
  private user: GoogleUser = undefined;

  constructor(private _gAuthService: GoogleAuthService, private _gApiService: GoogleApiService) {
    this._gApiService.onLoad().subscribe();
    this._gAuthService.getAuth().subscribe(auth => {
      console.log(auth.isSignedIn.get());
      this.user = auth.currentUser.get();
    });
  }

  signIn(): void {
    this._gAuthService.getAuth().subscribe(auth => {
      auth
        .signIn()
        .then((result: GoogleUser) => {
          this.signInSuccessHandler(result);
        })
        .catch(err => {
          console.error(err);
        });
    });
  }

  signOut(): void {
    this._gAuthService.getAuth().subscribe(auth => {
      try {
        auth.signOut();
      } catch (e) {
        console.error(e);
      }
      sessionStorage.removeItem(UserService.SESSION_STORAGE_KEY);
    });
  }

  private signInSuccessHandler(res: GoogleUser) {
    this.user = res;
    localStorage.setItem(UserService.SESSION_STORAGE_KEY, res.getAuthResponse().access_token);
  }
  getUserId() {
    return this.user.getBasicProfile().getEmail();
  }

  public getToken(): string {
    let token: string = localStorage.getItem(UserService.SESSION_STORAGE_KEY);
    if (!token) {
      throw new Error('no token set , authentication required');
    }
    return token;
  }
}
