import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesbloquearuserPage } from './desbloquearuser.page';

const routes: Routes = [
  {
    path: '',
    component: DesbloquearuserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesbloquearuserPageRoutingModule {}
