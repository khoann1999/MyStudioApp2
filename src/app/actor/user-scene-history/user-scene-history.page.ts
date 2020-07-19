import { Component, OnInit } from '@angular/core';
import { Scene } from 'src/app/models/Scene';
import { SceneService } from 'src/app/services/Scene.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-scene-history',
  templateUrl: './user-scene-history.page.html',
  styleUrls: ['./user-scene-history.page.scss'],
})
export class UserSceneHistoryPage implements OnInit {
  scenes: Scene[];
  constructor(private sceneService: SceneService, private  router: Router) { }

  ngOnInit() {
    this.getScene();
  }
  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
    this.getScene();
  }

  private getScene(){
    this.sceneService.getScenes().subscribe(result => this.scenes = result);
  }
}
