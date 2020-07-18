import { Tool } from './../../../models/Tool';
import { SceneActor } from './../../../models/SceneActor';
import { Actor } from './../../../models/Actor';
import { Component, OnInit } from '@angular/core';
import { Scene } from 'src/app/models/Scene';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SceneService } from 'src/app/services/Scene.service';
import { ActorService } from 'src/app/services/actor.service';
import { ToolService } from 'src/app/services/tool.service';
import { SceneTool } from 'src/app/models/SceneTool';

@Component({
  selector: 'app-scene-detail',
  templateUrl: './scene-detail.page.html',
  styleUrls: ['./scene-detail.page.scss'],
})
export class SceneDetailPage implements OnInit {
  public scene: Scene;
  public sceneForm: FormGroup;
  private file: File;
  public actors: Actor[];
  public selectedActorList: SceneActor[];
  public tools: Tool[];
  public selectedToolList: Tool[];
  public selectedActor: string;
  public selectedTool: string;
  constructor(private activatedRoute: ActivatedRoute, private actorService: ActorService,
              private toolService: ToolService,
              private sceneService: SceneService,
              private router: Router) { }

  ngOnInit() {
    const sceneId = this.activatedRoute.snapshot.paramMap.get('sceneId');

    this.selectedToolList = [];
    this.selectedActorList = [];
    this.getCurrentActors(sceneId);
    this.getCurrentTools(sceneId);
    this.getActors();
    this.getTools();
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
          selectActor: new FormControl(),
          selectTool: new FormControl(),
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
  public submitScene() {
    const scene = {
      sceneId: this.scene.sceneId,
      sceneName: this.sceneForm.get('sceneName').value,
      description: this.sceneForm.get('description').value,
      shootTimes: this.sceneForm.get('shootTimes').value,
      sceneScript: this.file.name,
      dateBegin: this.sceneForm.get('dateBegin').value,
      dateEnd: this.sceneForm.get('dateEnd').value
    };
    this.sceneService.updateScene(scene);
    this.sceneService.addActor(this.selectedActorList);
    this.sceneService.addTool(this.selectedToolList, this.scene.sceneId);
    this.sceneService.uploadScript(this.file);
    this.router.navigateByUrl('/scenes');
  }
  public deleteScene() {
    this.sceneService.deleteSceneByID(this.scene.sceneId);
    this.router.navigateByUrl('/scenes');
  }
  changeListener($event): void {
    this.file = $event.target.files[0];
  }
  public addActor(selectedActor: string) {
    const newActor: SceneActor = {
      id: 0,
      sceneId: this.scene.sceneId,
      userName: selectedActor
    };
    this.selectedActorList.push(newActor);
  }
  public addTool(selectedTool: string) {
    const findTool = this.tools.find(tool => tool.toolId === parseInt(selectedTool, 10));
    const newTool: Tool = {
      toolId: findTool.toolId,
      toolName: findTool.toolName,
      description: findTool.description,
      image: findTool.image,
      quantity: 1,
      status: findTool.status,
    };
    this.selectedToolList.push(newTool);
  }
  public incrementQty(toolId: number) {
    const findTool = this.selectedToolList.findIndex(tool => tool.toolId === toolId);
    if (this.selectedToolList[findTool].quantity <= 0) {
      this.selectedToolList[findTool].quantity = 1;
    }
    const compareTool = this.tools.findIndex(tool => tool.toolId === toolId);
    if (this.selectedToolList[findTool].quantity >= this.tools[compareTool].quantity) {
      this.selectedToolList[findTool].quantity = this.tools[compareTool].quantity;
    } else {
      this.selectedToolList[findTool].quantity += 1;
    }
  }
  public decrementQty(toolId: number) {
    const findTool = this.selectedToolList.findIndex(tool => tool.toolId === toolId);
    if (this.selectedToolList[findTool].quantity <= 1) {
      this.selectedToolList[findTool].quantity = 1;
    }
    this.selectedToolList[findTool].quantity -= 1;
  }

  private getActors() {
    this.actorService.getActors().subscribe(result => this.actors = result);
  }
  private getTools() {
    this.toolService.getTools().subscribe(result => this.tools = result);
  }
  private getCurrentActors(sceneId: string){
    this.sceneService.getActorByID(parseInt(sceneId, 10)).subscribe(result => {
      result.forEach(element => {
      const newSelectedActor: SceneActor = {
        id: element.id,
        sceneId: element.sceneId,
        userName: element.username
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
}
