import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    // path: '',
    // redirectTo: 'folder/Inbox',
    // pathMatch: 'full'
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
  ,
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'actors/:userName',
    loadChildren: () => import('./admin/user/user-detail/user-detail.module').then( m => m.UserDetailPageModule)
  },
  {
    path: 'actors',
    loadChildren: () => import('./admin/user/user-list/user-list.module').then( m => m.UserListPageModule)
  },
  {
    path: 'actor/create',
    loadChildren: () => import('./admin/user/user-create/user-create.module').then( m => m.UserCreatePageModule)
  },
  {
    path: 'tool/create',
    loadChildren: () => import('./admin/tool/tool-create/tool-create.module').then( m => m.ToolCreatePageModule)
  },
  {
    path: 'tools/:toolId',
    loadChildren: () => import('./admin/tool/tool-detail/tool-detail.module').then( m => m.ToolDetailPageModule)
  },
  {
    path: 'tools',
    loadChildren: () => import('./admin/tool/tool-list/tool-list.module').then( m => m.ToolListPageModule)
  },
  {
    path: 'scene/create',
    loadChildren: () => import('./admin/scene/scene-create/scene-create.module').then( m => m.SceneCreatePageModule)
  },
  {
    path: 'scenes/:sceneId',
    loadChildren: () => import('./admin/scene/scene-detail/scene-detail.module').then( m => m.SceneDetailPageModule)
  },
  {
    path: 'scenes',
    loadChildren: () => import('./admin/scene/scene-list/scene-list.module').then( m => m.SceneListPageModule)
  },
  {
    path: 'user/scene/recently',
    loadChildren: () => import('./actor/user-scene-recently/user-scene-recently.module').then( m => m.UserSceneRecentlyPageModule)
  },
  {
    path: 'user/scene/history',
    loadChildren: () => import('./actor/user-scene-history/user-scene-history.module').then( m => m.UserSceneHistoryPageModule)
  },
  {
    path: 'user/scene/detail/:sceneId',
    loadChildren: () => import('./actor/user-scene-detail/user-scene-detail.module').then( m => m.UserSceneDetailPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
