import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserDetailPageRoutingModule } from './user-detail-routing.module';

import { UserDetailPage } from './user-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    UserDetailPageRoutingModule
  ],
  declarations: [UserDetailPage]
})
export class UserDetailPageModule {}
