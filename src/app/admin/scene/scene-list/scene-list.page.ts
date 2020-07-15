import { Component, OnInit } from '@angular/core';
import { SceneService } from 'src/app/services/Scene.service';
import { Router } from '@angular/router';
import { Scene } from 'src/app/models/Scene';

@Component({
  selector: 'app-scene-list',
  templateUrl: './scene-list.page.html',
  styleUrls: ['./scene-list.page.scss'],
})
export class SceneListPage implements OnInit {
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
  public createScene(){
    this.router.navigateByUrl('/scene/create');
  }
}


