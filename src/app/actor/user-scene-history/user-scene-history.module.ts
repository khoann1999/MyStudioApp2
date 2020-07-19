import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserSceneHistoryPageRoutingModule } from './user-scene-history-routing.module';

import { UserSceneHistoryPage } from './user-scene-history.page';
import { UserSceneComponentModule } from '../user-scene-grid/user-scene.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserSceneComponentModule,
    UserSceneHistoryPageRoutingModule
  ],
  declarations: [UserSceneHistoryPage]
})
export class UserSceneHistoryPageModule {}
