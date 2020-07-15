import { ToolService } from './../../../services/tool.service';
import { Component, OnInit } from '@angular/core';
import { Tool } from 'src/app/models/Tool';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tool-list',
  templateUrl: './tool-list.page.html',
  styleUrls: ['./tool-list.page.scss'],
})
export class ToolListPage implements OnInit {
  tools: Tool[];
  constructor(private toolService: ToolService, private  router: Router) { }

  ngOnInit() {
    this.getTools();
  }
  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
    this.getTools();
  }

  private getTools(){
    this.toolService.getTools().subscribe(result => this.tools = result);
  }
  public createTool(){
    this.router.navigateByUrl('/tool/create');
  }
}
