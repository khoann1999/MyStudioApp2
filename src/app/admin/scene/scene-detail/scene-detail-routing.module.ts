import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SceneDetailPage } from './scene-detail.page';

const routes: Routes = [
  {
    path: '',
    component: SceneDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SceneDetailPageRoutingModule {}
