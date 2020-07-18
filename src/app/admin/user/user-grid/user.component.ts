
import { Component, OnInit, Input } from '@angular/core';
import { Actor } from 'src/app/models/Actor';
import { environment } from './../../../../environments/environment';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  @Input() actor: Actor;
  public imageApi = environment.serverImage + 'ActorImages/';
  constructor() { }

  ngOnInit() {}

  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }
}
