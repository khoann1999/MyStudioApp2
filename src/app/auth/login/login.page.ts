import { User } from '../../models/User';
import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public userForm: FormGroup;
  constructor(private loginService: LoginService, private  router: Router) { }

  ngOnInit() {
    this.userForm = new FormGroup({
      userName: new FormControl(),
      password: new FormControl(),
    });
  }
  login(){
    const user = {
      userName: this.userForm.get('userName').value,
      password: this.userForm.get('password').value,
      role: null
    };
    this.loginService.login(user);
    if (this.loginService.getCurrentUser() != null) {
      this.userForm = new FormGroup({
        userName: new FormControl(),
        password: new FormControl(),
      });
    }
  }
  isLoggedIn() {
    if (this.loginService.getCurrentUser() != null) {
      this.router.navigateByUrl('scenes');
    }
  }
}
