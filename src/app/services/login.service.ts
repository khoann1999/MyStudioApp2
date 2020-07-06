import { User } from './../models/User';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class LoginService {
private apiUrl = 'https://mystudiowebapi.conveyor.cloud/api/';
constructor(private http: HttpClient) { }
user: User;
public login(){
    this.user = {
        username : 'asd',
        password : '12321',
        role : null
    }
    this.http.post<User>(this.apiUrl + 'Accounts', this.user).subscribe(result => {
    }, error => console.error(error));
}
}
