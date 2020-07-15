import { Component, OnInit } from '@angular/core';
import { Scene } from 'src/app/models/Scene';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SceneService } from 'src/app/services/Scene.service';

@Component({
  selector: 'app-scene-detail',
  templateUrl: './scene-detail.page.html',
  styleUrls: ['./scene-detail.page.scss'],
})
export class SceneDetailPage implements OnInit {
  public scene: Scene;
  public sceneForm: FormGroup;
  constructor(private activatedRoute: ActivatedRoute, private sceneService: SceneService, private  router: Router) { }

  ngOnInit() {
    const sceneId = this.activatedRoute.snapshot.paramMap.get('sceneId');

    this.sceneService.getSceneByID(parseInt(sceneId, 10)).subscribe(result => {
      this.scene = result;
      this.sceneForm = new FormGroup(
        {
          sceneName: new FormControl(this.scene.sceneName),
          description: new FormControl(this.scene.description),
          shootTimes: new FormControl(this.scene.shootTimes),
          sceneScript: new FormControl(this.scene.sceneScript),
          dateBegin: new FormControl(this.scene.dateBegin),
          dateEnd: new FormControl(this.scene.dateEnd),
        }
      );
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
  public submitScene(){
    const scene = {
      sceneId: this.scene.sceneId,
      sceneName: this.sceneForm.get('sceneName').value,
      description: this.sceneForm.get('description').value,
      shootTimes: this.sceneForm.get('shootTimes').value,
      sceneScript: null,
      dateBegin: this.sceneForm.get('dateBegin').value,
      dateEnd: this.sceneForm.get('dateEnd').value
    };
    this.sceneService.updateScene(scene);
    this.router.navigateByUrl('/scenes');
  }
  public deleteScene(){
    this.sceneService.deleteSceneByID(this.scene.sceneId);
    this.router.navigateByUrl('/scenes');
  }
}
