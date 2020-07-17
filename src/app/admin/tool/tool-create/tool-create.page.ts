import { Component, OnInit } from '@angular/core';
import { Tool } from 'src/app/models/Tool';
import { FormGroup, FormControl } from '@angular/forms';
import { ToolService } from 'src/app/services/tool.service';
import { Router } from '@angular/router';
import { environment } from './../../../../environments/environment';
@Component({
  selector: 'app-tool-create',
  templateUrl: './tool-create.page.html',
  styleUrls: ['./tool-create.page.scss'],
})
export class ToolCreatePage implements OnInit {
  public tool: Tool;
  public toolForm: FormGroup;
  private file: File;
  constructor(private toolService: ToolService, private  router: Router) { }

  ngOnInit() {
    this.toolForm = new FormGroup(
      {
        toolName: new FormControl(),
        image: new FormControl(),
        description: new FormControl(),
        quantity: new FormControl(),
      }
    );
  }
  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Inbox' : '';
  }
  public createTool(){
    const tool = {
      toolId: 0,
      toolName: this.toolForm.get('toolName').value,
      image: this.file.name,
      description: this.toolForm.get('description').value,
      quantity: this.toolForm.get('quantity').value,
      status: true
    };
    this.toolService.createTool(tool).subscribe(result => {
      this.router.navigateByUrl('/tools');
    },
    error => {
    }
    );
    this.toolService.uploadImage(this.file);
 }

  changeListener($event): void {
    this.file = $event.target.files[0];
  }
}
