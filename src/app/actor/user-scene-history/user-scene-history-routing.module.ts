import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserSceneHistoryPage } from './user-scene-history.page';

const routes: Routes = [
  {
    path: '',
    component: UserSceneHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserSceneHistoryPageRoutingModule {}
