import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SceneCreatePage } from './scene-create.page';

const routes: Routes = [
  {
    path: '',
    component: SceneCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SceneCreatePageRoutingModule {}
