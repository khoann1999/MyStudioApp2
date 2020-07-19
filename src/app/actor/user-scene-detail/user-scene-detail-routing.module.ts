import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserSceneDetailPage } from './user-scene-detail.page';

const routes: Routes = [
  {
    path: '',
    component: UserSceneDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserSceneDetailPageRoutingModule {}
