import { ActorService } from './../../../services/actor.service';
import { Actor } from './../../../models/Actor';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.page.html',
  styleUrls: ['./user-list.page.scss'],
})
export class UserListPage implements OnInit {
  public actors: Actor[];
  constructor(private actorService: ActorService, private  router: Router) { }

  ngOnInit() {
    this.getActors();
  }
  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
    this.getActors();
  }

  private getActors(){
    this.actorService.getActors().subscribe(result => this.actors = result);
  }
  public createActor(){
    this.router.navigateByUrl('/actor/create');
  }
}
