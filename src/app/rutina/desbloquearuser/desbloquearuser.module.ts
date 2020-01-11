import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DesbloquearuserPageRoutingModule } from './desbloquearuser-routing.module';

import { DesbloquearuserPage } from './desbloquearuser.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DesbloquearuserPageRoutingModule
  ],
  declarations: [DesbloquearuserPage]
})
export class DesbloquearuserPageModule {}
