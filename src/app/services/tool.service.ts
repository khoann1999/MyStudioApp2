import { Tool } from './../models/Tool';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ToolService {

  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  public getTools(): Observable<Tool[]> {
    return this.http.get<Tool[]>(this.apiUrl + 'Tools');
  }
  public getToolByID(id: number): Observable<Tool> {
    return this.http.get<Tool>(this.apiUrl + 'Tools' + '/' + id);
  }
  public updateTool(tool: Tool) {
    return this.http.put(this.apiUrl + 'Tools' + '/' + tool.toolId, tool, { responseType: 'text' }).subscribe(
      error => console.error(error));
  }
  public deleteToolByID(id: number) {
    return this.http.delete(this.apiUrl + 'Tools' + '/' + id, { responseType: 'text' }).subscribe(
      error => console.error(error));
  }
  public createTool(tool: Tool): Observable<Tool> {
    return this.http.post<Tool>(this.apiUrl + 'Tools', tool);
  }
  public uploadImage(file: File){
    const formData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post(this.apiUrl + 'Tools' + '/UploadImage', formData, { responseType: 'text' }).subscribe(
      error => console.error(error));
  }
}
