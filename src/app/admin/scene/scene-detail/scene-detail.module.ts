import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SceneDetailPageRoutingModule } from './scene-detail-routing.module';

import { SceneDetailPage } from './scene-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    SceneDetailPageRoutingModule
  ],
  declarations: [SceneDetailPage]
})
export class SceneDetailPageModule {}
