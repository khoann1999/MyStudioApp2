import { Scene } from './../models/Scene';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SceneService {

  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }
  public getScenes(): Observable<Scene[]> {
    return this.http.get<Scene[]>(this.apiUrl + 'scenes');
  }
  public getSceneByID(id: number): Observable<Scene> {
    return this.http.get<Scene>(this.apiUrl + 'scenes' + '/' + id);
    }
  public updateScene(scene: Scene){
    return this.http.put(this.apiUrl + 'scenes' + '/' + scene.sceneId, scene, { responseType: 'text' }).subscribe(
      error => console.error(error));
  }
  public deleteSceneByID(id: number){
    return this.http.delete(this.apiUrl + 'scenes' + '/' + id, { responseType: 'text' }).subscribe(
      error => console.error(error));
  }
  public createScene(scene: Scene): Observable<Scene>{
    return this.http.post<Scene>(this.apiUrl + 'scenes', scene);
  }
}
