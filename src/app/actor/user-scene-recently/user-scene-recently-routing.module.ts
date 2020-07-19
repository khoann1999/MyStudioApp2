import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserSceneRecentlyPage } from './user-scene-recently.page';

const routes: Routes = [
  {
    path: '',
    component: UserSceneRecentlyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserSceneRecentlyPageRoutingModule {}
