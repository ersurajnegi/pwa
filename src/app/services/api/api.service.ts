import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '../../../../node_modules/@angular/common/http';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl: string = 'https://www.googleapis.com/gmail/v1/users/';
  constructor(private _http: HttpClient, private _user: UserService) {}

  getLabels() {
    const authtoken = this._user.getToken();
    return this._http.get(`${this.baseUrl}${this._user.getUserId()}/labels`, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${authtoken}`
      })
    });
  }
}
