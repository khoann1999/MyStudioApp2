import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actor } from 'src/app/models/Actor';
import { ActorService } from 'src/app/services/actor.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.page.html',
  styleUrls: ['./user-detail.page.scss'],
})
export class UserDetailPage implements OnInit {
  public actor: Actor;
  public actorForm: FormGroup;
  private file: File;
  constructor(private activatedRoute: ActivatedRoute, private actorService: ActorService, private  router: Router) { }

  ngOnInit() {
    const username = this.activatedRoute.snapshot.paramMap.get('userName');

    this.actorService.getActorByName(username).subscribe(result => {
      this.actor = result;

      this.actorForm = new FormGroup(
        {
          userName: new FormControl(this.actor.userName),
          fullName: new FormControl(this.actor.userName),
          image: new FormControl(this.actor.image),
          description: new FormControl(this.actor.description),
          phoneNumber: new FormControl(this.actor.phoneNumber),
          email: new FormControl(this.actor.email),
        }
      );
    }, error => {
      console.error(error);
      this.router.navigateByUrl('/actors');
  }
    );
  }
  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Back' : '';
  }
  public submitActor(){
    const actor = {
      userName: this.actorForm.get('userName').value,
      fullName: this.actorForm.get('fullName').value,
      image: this.file.name,
      description: this.actorForm.get('description').value,
      phoneNumber: this.actorForm.get('phoneNumber').value,
      email: this.actorForm.get('email').value,
      usernameNavigation: null
    };
    this.actorService.updateActor(actor);
    this.actorService.uploadImage(this.file);
    this.router.navigateByUrl('/actors');
  }
  public deleteActor(){
    this.actorService.deleteActorByName(this.actor.userName);
    this.router.navigateByUrl('/actors');
  }
  changeListener($event): void {
    this.file = $event.target.files[0];
  }
}
