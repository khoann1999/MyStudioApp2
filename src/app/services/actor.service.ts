import { Actor } from './../models/Actor';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActorService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  public getActors(): Observable<Actor[]> {
    return this.http.get<Actor[]>(this.apiUrl + 'Actors');
  }
  public getActorByName(userName: string): Observable<Actor> {
    return this.http.get<Actor>(this.apiUrl + 'Actors' + '/' + userName);
    }
  public updateActor(actor: Actor){
    return this.http.put(this.apiUrl + 'Actors' + '/' + actor.userName, actor, { responseType: 'text' }).subscribe(
      error => console.error(error));
  }
  public deleteActorByName(userName: string){
    return this.http.delete(this.apiUrl + 'Actors' + '/' + userName, { responseType: 'text' }).subscribe(
      error => console.error(error));
  }
  public createActor(actor: Actor): Observable<Actor>{
    return this.http.post<Actor>(this.apiUrl + 'Actors', actor);
  }
}
