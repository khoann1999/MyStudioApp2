import { User } from '../../models/User';
import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(private loginService: LoginService, private  router: Router) { }

  ngOnInit() {
  }
  login(form: { value: { email: any; password: any; }; }){
    this.loginService.login(form);
  }
  isLoggedIn() {
    if (this.loginService.getCurrentUser() != null) {
      this.router.navigateByUrl('scenes');
    }
  }
}
