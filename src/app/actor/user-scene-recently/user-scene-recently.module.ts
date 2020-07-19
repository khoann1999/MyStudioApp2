import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserSceneRecentlyPageRoutingModule } from './user-scene-recently-routing.module';

import { UserSceneRecentlyPage } from './user-scene-recently.page';
import { UserSceneComponentModule } from '../user-scene-grid/user-scene.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserSceneComponentModule,
    UserSceneRecentlyPageRoutingModule
  ],
  declarations: [UserSceneRecentlyPage]
})
export class UserSceneRecentlyPageModule {}
