import { Tool } from './../models/Tool';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToolService {

private apiUrl = 'https://mystudiowebapi.conveyor.cloud/api/';
constructor(private http: HttpClient) { }

public getTools(): Observable<Tool[]> {
  return this.http.get<Tool[]>(this.apiUrl + 'tools');
}
public getToolByID(id: number): Observable<Tool> {
  return this.http.get<Tool>(this.apiUrl + 'tools' + '/' + id);
  }
public updateTool(tool: Tool){
  return this.http.put(this.apiUrl + 'tools' + '/' + tool.toolId, tool, { responseType: 'text' }).subscribe(
    error => console.error(error));
}
public deleteToolByID(id: number){
  return this.http.delete(this.apiUrl + 'tools' + '/' + id, { responseType: 'text' }).subscribe(
    error => console.error(error));
}
public createTool(tool: Tool): Observable<Tool>{
  return this.http.post<Tool>(this.apiUrl + 'tools', tool);
}
}
