import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToolCreatePage } from './tool-create.page';

const routes: Routes = [
  {
    path: '',
    component: ToolCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToolCreatePageRoutingModule {}
