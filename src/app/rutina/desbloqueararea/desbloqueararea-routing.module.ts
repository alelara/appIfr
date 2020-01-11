import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesbloquearareaPage } from './desbloqueararea.page';

const routes: Routes = [
  {
    path: '',
    component: DesbloquearareaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesbloquearareaPageRoutingModule {}
