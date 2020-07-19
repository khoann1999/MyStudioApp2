import { Role } from './Enum/Role.enum';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';
import { Component, OnInit, AfterViewChecked , ChangeDetectorRef } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { User } from './models/User';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit, AfterViewChecked   {
  public selectedIndex = 0;
  public appPages = [];
  // [
  //   {
  //     title: 'Inbox',
  //     url: '/folder/Inbox',
  //     icon: 'mail'
  //   },
  //   {
  //     title: 'Outbox',
  //     url: '/folder/Outbox',
  //     icon: 'paper-plane'
  //   },
  //   {
  //     title: 'Favorites',
  //     url: '/folder/Favorites',
  //     icon: 'heart'
  //   },
  //   {
  //     title: 'Archived',
  //     url: '/folder/Archived',
  //     icon: 'archive'
  //   },
  //   {
  //     title: 'Trash',
  //     url: '/folder/Trash',
  //     icon: 'trash'
  //   },
  //   {
  //     title: 'Spam',
  //     url: '/folder/Spam',
  //     icon: 'warning'
  //   }
  // ];
  // // public labels = ['Logout'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private loginService: LoginService,
    public router: Router,
    private cdr: ChangeDetectorRef
  ) {
    this.initializeApp();
  }
  ngAfterViewChecked(): void {
    this.cdr.detectChanges();

  }

  initializeApp() {

    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }

  private getMenu(user: User) {
    this.appPages = [];
    if (user == null){
      return;
    }
    switch (user.role) {
      case Role.Admin: {
        this.appPages = [
          {
            title: 'Kiếp nạn',
            url: '/scenes',
            icon: 'mail'
          },
          {
            title: 'Diễn viên',
            url: '/actors',
            icon: 'paper-plane'
          },
          {
            title: 'Đạo cụ',
            url: '/tools',
            icon: 'heart'
          }];
        break;
      }
      case Role.User: {
        this.appPages = [
          {
            title: 'Kiếp nạn sắp tới',
            url: '',
            icon: 'mail'
          },
          {
            title: 'Kiếp nạn đã qua',
            url: '',
            icon: 'paper-plane'
          },
          {
            title: 'Thông báo',
            url: '',
            icon: 'heart'
          }];
        break;
      }
      default: {
        this.appPages = [];
        break;
     }
    }
  }

  public getUserName() {
    const user = this.loginService.getCurrentUser();
    if (user == null) {
      return;
    }
    this.getMenu(user);
    return user.userName;
  }
  public logOut() {
    this.loginService.logout();
    this.getMenu(null);
    this.router.navigateByUrl('login').then();
  }
}
