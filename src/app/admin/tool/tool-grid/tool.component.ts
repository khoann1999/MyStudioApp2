import { Tool } from './../../../models/Tool';

import { Component, OnInit, Input } from '@angular/core';

import { environment } from './../../../../environments/environment';
@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.scss'],
})
export class ToolComponent implements OnInit {
  @Input() tool: Tool;
  public imageApi = environment.fileServer + 'ToolImages/';
  constructor() { }

  ngOnInit() {}

  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }
}
