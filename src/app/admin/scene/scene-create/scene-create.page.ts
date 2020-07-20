import { Scene } from './../../../models/Scene';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SceneService } from 'src/app/services/Scene.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scene-create',
  templateUrl: './scene-create.page.html',
  styleUrls: ['./scene-create.page.scss'],
})
export class SceneCreatePage implements OnInit {
  public scene: Scene;
  public sceneForm: FormGroup;
  private file: File;
  constructor(private sceneService: SceneService, private  router: Router) { }

  ngOnInit() {
    this.sceneForm = new FormGroup(
      {
        sceneName: new FormControl(),
        description: new FormControl(),
        shootTimes: new FormControl(),
        sceneScript: new FormControl(),
        dateBegin: new FormControl(),
        dateEnd: new FormControl(),
      }
    );
  }
  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Back' : '';
  }
  public submitScene(){
    const scene = {
      sceneId: 0,
      sceneName: this.sceneForm.get('sceneName').value,
      description: this.sceneForm.get('description').value,
      shootTimes: this.sceneForm.get('shootTimes').value,
      sceneScript: this.file.name,
      dateBegin: this.sceneForm.get('dateBegin').value,
      dateEnd: this.sceneForm.get('dateEnd').value
    };
    this.sceneService.createScene(scene).subscribe(result => {
      this.router.navigateByUrl('/scenes');
    },
    error => {
    }
    );
    this.sceneService.uploadScript(this.file);
  }
  changeListener($event): void {
    this.file = $event.target.files[0];
  }
}
