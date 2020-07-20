import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/models/Actor';
import { FormGroup, FormControl } from '@angular/forms';
import { ActorService } from 'src/app/services/actor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.page.html',
  styleUrls: ['./user-create.page.scss'],
})
export class UserCreatePage implements OnInit {
  public actor: Actor;
  public actorForm: FormGroup;
  private file: File;

  constructor(private actorService: ActorService, private  router: Router) { }

  ngOnInit() {
    this.actorForm = new FormGroup(
      {
        userName: new FormControl(),
        password: new FormControl(),
        fullName: new FormControl(),
        image: new FormControl(),
        description: new FormControl(),
        phoneNumber: new FormControl(),
        email: new FormControl(),
      });
  }
  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Back' : '';
  }
  public createActor(){
    const submitUser = {
      userName: this.actorForm.get('userName').value,
      password: this.actorForm.get('password').value,
      role: 'User'
    };
    const actor = {
      userName: this.actorForm.get('userName').value,
      fullName: this.actorForm.get('fullName').value,
      image: this.file.name,
      description: this.actorForm.get('description').value,
      phoneNumber: this.actorForm.get('phoneNumber').value,
      email: this.actorForm.get('email').value,
      usernameNavigation: submitUser
    };
    this.actorService.createActor(actor).subscribe(result => {
      this.router.navigateByUrl('/actors');
    },
    error => {
    }
    );
    this.actorService.uploadImage(this.file);
  }
  changeListener($event): void {
    this.file = $event.target.files[0];
  }
}
