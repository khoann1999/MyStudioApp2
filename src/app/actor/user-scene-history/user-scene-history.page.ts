import { Component, OnInit } from '@angular/core';
import { Scene } from 'src/app/models/Scene';
import { SceneService } from 'src/app/services/Scene.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-user-scene-history',
  templateUrl: './user-scene-history.page.html',
  styleUrls: ['./user-scene-history.page.scss'],
})
export class UserSceneHistoryPage implements OnInit {
  scenes: Scene[];
  constructor(private sceneService: SceneService, private loginService: LoginService) { }

  ngOnInit() {
    this.getHistoryScene();
  }
  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
    this.getHistoryScene();
  }

  private getHistoryScene(){
    this.sceneService.getHistoryScenes(this.loginService.getCurrentUser().userName).subscribe(result => this.scenes = result);
  }
}
