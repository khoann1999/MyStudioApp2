import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToolCreatePageRoutingModule } from './tool-create-routing.module';

import { ToolCreatePage } from './tool-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ToolCreatePageRoutingModule
  ],
  declarations: [ToolCreatePage]
})
export class ToolCreatePageModule {}
