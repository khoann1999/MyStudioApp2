import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserSceneDetailPageRoutingModule } from './user-scene-detail-routing.module';

import { UserSceneDetailPage } from './user-scene-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserSceneDetailPageRoutingModule
  ],
  declarations: [UserSceneDetailPage]
})
export class UserSceneDetailPageModule {}
