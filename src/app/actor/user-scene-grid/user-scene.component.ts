
import { Component, OnInit, Input } from '@angular/core';
import { Scene } from 'src/app/models/Scene';


@Component({
  selector: 'app-user-scene',
  templateUrl: './user-scene.component.html',
  styleUrls: ['./user-scene.component.scss'],
})
export class UserSceneComponent implements OnInit {
  @Input() scene: Scene;
  constructor() { }

  ngOnInit() {}

  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }
}
