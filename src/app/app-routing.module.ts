import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'desbloquearCuenta',
    loadChildren: () => import('./rutina/desbloquearuser/desbloquearuser.module').then(m => m.DesbloquearuserPageModule)
  },
  {
    path: 'desbloquearArea',
    loadChildren: () => import('./rutina/desbloqueararea/desbloqueararea.module').then( m => m.DesbloquearareaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
