import { User } from '../models/User';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable()
export class LoginService {
    private apiUrl = environment.apiUrl;
    private user: User;
    constructor(private http: HttpClient) { }

    public getCurrentUser(){
            return this.user;
    }

    public login(account: User) {
        this.http.post<User>(this.apiUrl + 'Accounts/Login', account).subscribe(result => {
            this.user = result;
          }, error => {
              console.error(error);
              return null;
            });
        return this.user;
    }
    public logout() {
        this.user = null;
    }

}
