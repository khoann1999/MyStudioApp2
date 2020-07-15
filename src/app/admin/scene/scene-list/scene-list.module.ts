import { SceneComponentModule } from './../scene-grid/scene.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SceneListPageRoutingModule } from './scene-list-routing.module';

import { SceneListPage } from './scene-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SceneListPageRoutingModule,
    SceneComponentModule
  ],
  declarations: [SceneListPage]
})
export class SceneListPageModule {}
