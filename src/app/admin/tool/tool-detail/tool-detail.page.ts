import { Tool } from 'src/app/models/Tool';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ToolService } from 'src/app/services/tool.service';

@Component({
  selector: 'app-tool-detail',
  templateUrl: './tool-detail.page.html',
  styleUrls: ['./tool-detail.page.scss'],
})
export class ToolDetailPage implements OnInit {

  public tool: Tool;
  public toolForm: FormGroup;
  private file: File;

  constructor(private activatedRoute: ActivatedRoute, private toolService: ToolService, private  router: Router) { }

  ngOnInit() {
    const toolId = this.activatedRoute.snapshot.paramMap.get('toolId');

    this.toolService.getToolByID(parseInt(toolId, 10)).subscribe(result => {
      this.tool = result;

      this.toolForm = new FormGroup(
        {
          toolId: new FormControl(this.tool.toolId),
          toolName: new FormControl(this.tool.toolName),
          image: new FormControl(this.tool.image),
          description: new FormControl(this.tool.description),
          quantity: new FormControl(this.tool.quantity),
          status: new FormControl(this.tool.status)
        }
      );
    }, error => {
      console.error(error);
      this.router.navigateByUrl('/tools');
  }
    );
  }
  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Back' : '';
  }
  public submitTool(){
    const tool = {
      toolId: this.toolForm.get('toolId').value,
      toolName: this.toolForm.get('toolName').value,
      image: this.file.name,
      description: this.toolForm.get('description').value,
      quantity: this.toolForm.get('quantity').value,
      status: this.toolForm.get('status').value === 'mới'
    };
    this.toolService.updateTool(tool);
    this.toolService.uploadImage(this.file);
    this.router.navigateByUrl('/tools');
  }
  public deleteTool(){
    this.toolService.deleteToolByID(this.tool.toolId);
    this.router.navigateByUrl('/tools');
  }


 changeListener($event): void {
   this.file = $event.target.files[0];
 }
}
