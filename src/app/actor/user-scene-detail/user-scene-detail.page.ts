import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { SceneService } from 'src/app/services/Scene.service';
import { Scene } from 'src/app/models/Scene';
import { ActivatedRoute } from '@angular/router';
import { SceneActor } from 'src/app/models/SceneActor';
import { Tool } from 'src/app/models/Tool';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-user-scene-detail',
  templateUrl: './user-scene-detail.page.html',
  styleUrls: ['./user-scene-detail.page.scss'],
})
export class UserSceneDetailPage implements OnInit {
  public scene: Scene;
  public selectedActorList: SceneActor[];
  public selectedToolList: Tool[];
  private fileTransfer: FileTransferObject;
  constructor(private activatedRoute: ActivatedRoute,
              private sceneService: SceneService,
              private transfer: FileTransfer,
              private file: File) { }

  ngOnInit() {
    this.scene = new Scene();
    this.selectedToolList = [];
    this.selectedActorList = [];
    const sceneId = this.activatedRoute.snapshot.paramMap.get('sceneId');
    this.getCurrentActors(sceneId);
    this.getCurrentTools(sceneId);
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
    return mode === 'ios' ? 'Back' : '';
  }
  private getCurrentActors(sceneId: string){
    this.sceneService.getActorByID(parseInt(sceneId, 10)).subscribe(result => {
      result.forEach(element => {
      const newSelectedActor: SceneActor = {
        id: element.id,
        sceneId: element.sceneId,
        userName: element.userName
      };
      this.selectedActorList.push(newSelectedActor);
    });
  },
  error => {
      console.error(error);
    });
  }
  private getCurrentTools(sceneId: string){
    this.sceneService.getToolByID(parseInt(sceneId, 10)).subscribe(result => {
      result.forEach(element => {
        const newSelectedTool: Tool = {
          toolId: element.id,
          description: null,
          image: null,
          status: null,
          toolName: element.tool.toolName,
          quantity: element.quantity
        };
        this.selectedToolList.push(newSelectedTool);
      });
    },  error => {
      console.error(error);
    });
  }
  public onClickToDownload(){
    this.fileTransfer = this.transfer.create();
    const url = environment.fileServer + 'SceneScripts/' + this.scene.sceneScript;
    this.fileTransfer.download(url, this.file.cacheDirectory  + this.scene.sceneScript).then((entry) => {
      console.log('download complete: ' + entry.toURL());
    }, (error) => {
      this.scene.description = error;
      // handle error
    });
  }
}
