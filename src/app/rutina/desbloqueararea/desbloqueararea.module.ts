import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DesbloquearareaPageRoutingModule } from './desbloqueararea-routing.module';

import { DesbloquearareaPage } from './desbloqueararea.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DesbloquearareaPageRoutingModule
  ],
  declarations: [DesbloquearareaPage]
})
export class DesbloquearareaPageModule {}
