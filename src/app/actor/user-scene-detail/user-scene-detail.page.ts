import { Component, OnInit } from '@angular/core';
import { SceneService } from 'src/app/services/Scene.service';
import { Scene } from 'src/app/models/Scene';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-scene-detail',
  templateUrl: './user-scene-detail.page.html',
  styleUrls: ['./user-scene-detail.page.scss'],
})
export class UserSceneDetailPage implements OnInit {
  public scene: Scene;
  constructor(private activatedRoute: ActivatedRoute, private sceneService: SceneService) { }

  ngOnInit() {
    this.scene = new Scene();
    const sceneId = this.activatedRoute.snapshot.paramMap.get('sceneId');
    this.sceneService.getSceneByID(parseInt(sceneId, 10)).subscribe(result => {
      this.scene = result;
    }, error => {
      console.error(error);
    }
    );
  }
  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Inbox' : '';
  }
}
