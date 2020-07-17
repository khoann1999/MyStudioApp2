import { Component, OnInit } from '@angular/core';
import { Tool } from 'src/app/models/Tool';
import { FormGroup, FormControl } from '@angular/forms';
import { ToolService } from 'src/app/services/tool.service';
import { Router } from '@angular/router';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
@Component({
  selector: 'app-tool-create',
  templateUrl: './tool-create.page.html',
  styleUrls: ['./tool-create.page.scss'],
})
export class ToolCreatePage implements OnInit {
  public tool: Tool;
  public toolForm: FormGroup;
  private fileTransfer: FileTransferObject = this.transfer.create();
  constructor(private toolService: ToolService, private  router: Router, private transfer: FileTransfer, private file: File) { }

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
      image: null,
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
  }
  changeListener($event): void {
    this.file = $event.target.files[0];
  }
  private upload() {
    const options: FileUploadOptions = {
       fileKey: 'file',
       fileName: 'name.jpg',
       headers: {}
      };
    }

  private download() {
    const url = 'http://www.example.com/file.pdf';
    this.fileTransfer.download(url, this.file.dataDirectory + 'file.pdf').then((entry) => {
      console.log('download complete: ' + entry.toURL());
    }, (error) => {
      // handle error
    });
  }
}
