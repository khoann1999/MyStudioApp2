import { SceneTool } from './../models/SceneTool';
import { Scene } from './../models/Scene';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { SceneActor } from '../models/SceneActor';
import { Tool } from '../models/Tool';
@Injectable({
  providedIn: 'root'
})
export class SceneService {

  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }
  public getScenes(): Observable<Scene[]> {
    return this.http.get<Scene[]>(this.apiUrl + 'Scenes');
  }
  public getSceneByID(id: number): Observable<Scene> {
    return this.http.get<Scene>(this.apiUrl + 'Scenes' + '/' + id);
  }
  public updateScene(scene: Scene) {
    return this.http.put(this.apiUrl + 'Scenes' + '/' + scene.sceneId, scene, { responseType: 'text' }).subscribe(
      error => console.error(error));
  }
  public deleteSceneByID(id: number) {
    return this.http.delete(this.apiUrl + 'Scenes' + '/' + id, { responseType: 'text' }).subscribe(
      error => console.error(error));
  }
  public createScene(scene: Scene): Observable<Scene> {
    return this.http.post<Scene>(this.apiUrl + 'Scenes', scene);
  }
  public uploadScript(file: File) {
    const formData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post(this.apiUrl + 'Scenes' + '/UploadImage', formData, { responseType: 'text' }).subscribe(
      error => console.error(error));
  }
  public addActor(actor: SceneActor[]){
    actor.forEach(element => {
    this.http.post<SceneActor>(this.apiUrl + 'Scenes/AddActor', element).subscribe(
      error => console.error(error));
    });
  }
  public getActorByID(id: number): Observable<SceneActor[]> {
    return this.http.get<SceneActor[]>(this.apiUrl + 'Scenes' + '/' + 'GetActors' + '/' + id);
  }

  public addTool(tool: Tool[], currrentSceneID: number) {
    tool.forEach(element => {
    const newTool: SceneTool = {
      id: 0,
      toolId: element.toolId,
      sceneId: currrentSceneID,
      quantity: element.quantity,
      tool: null,
      scene: null
    };
    this.http.post<SceneTool>(this.apiUrl + 'Scenes/AddPost', newTool).subscribe(
      error => console.error(error));
    });
  }

  public getToolByID(id: number): Observable<SceneTool[]> {
    return this.http.get<SceneTool[]>(this.apiUrl + 'Scenes' + '/GetPosts/' + id);
  }
}
