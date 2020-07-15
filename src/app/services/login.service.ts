import { User } from '../models/User';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable()
export class LoginService {
    private apiUrl = 'https://mystudiowebapi.conveyor.cloud/api/';
    private user: User;
    constructor(private http: HttpClient) { }

    public getCurrentUser(){
            return this.user;
    }

    public login(form) {
        const user = {
            userName: form.value.username,
            password: form.value.password,
            role: null
        };
        this.http.post<User>(this.apiUrl + 'Accounts/Login', user).subscribe(result => {
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
