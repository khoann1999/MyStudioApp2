import { Component, OnInit } from '@angular/core';
import { Scene } from 'src/app/models/Scene';
import { SceneService } from 'src/app/services/Scene.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-user-scene-recently',
  templateUrl: './user-scene-recently.page.html',
  styleUrls: ['./user-scene-recently.page.scss'],
})
export class UserSceneRecentlyPage implements OnInit {
  scenes: Scene[];
  constructor(private sceneService: SceneService, private loginService: LoginService) { }

  ngOnInit() {
    this.getCurrentScene();
  }
  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
    this.getCurrentScene();
  }

  private getCurrentScene(){
    this.sceneService.getCurrentScenes(this.loginService.getCurrentUser().userName).subscribe(result => this.scenes = result);
  }

}
