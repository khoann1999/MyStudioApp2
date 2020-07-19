import { User } from './../../models/User';
import { Role } from './../../Enum/Role.enum';
import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { MenuController, IonicModule, IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public userForm: FormGroup;
  constructor(
    public menu: MenuController,
    private loginService: LoginService,
    private  router: Router,
    private routerOutlet: IonRouterOutlet) { }

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
    const user: User = this.loginService.getCurrentUser();
    if (user != null) {
      if (user.role === Role.Admin){
      this.router.navigateByUrl('scenes');
      }
      if (user.role === Role.User){
      this.router.navigateByUrl('user/scene/recently');
      }
    }
  }
  ionViewWillEnter(){
    this.menu.enable(false);
    IonicModule.forRoot({ hardwareBackButton: false});
    this.routerOutlet.swipeGesture = false;
  }
  ionViewDidLeave() {
    this.menu.enable(true);
    IonicModule.forRoot({hardwareBackButton: true});
    this.routerOutlet.swipeGesture = true;
  }
}
