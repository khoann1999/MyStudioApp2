import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { MenuController, Platform, IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public userForm: FormGroup;
  constructor(public menu: MenuController, private loginService: LoginService, private  router: Router,  private platform: Platform) { }

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
  ionViewWillEnter(){
    this.menu.enable(false);
    IonicModule.forRoot({hardwareBackButton: false});
  }
  ionViewDidLeave() {
    this.menu.enable(true);
    IonicModule.forRoot({hardwareBackButton: true});
  }
}
