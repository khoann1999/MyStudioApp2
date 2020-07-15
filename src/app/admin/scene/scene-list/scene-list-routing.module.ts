import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SceneListPage } from './scene-list.page';

const routes: Routes = [
  {
    path: '',
    component: SceneListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SceneListPageRoutingModule {}
