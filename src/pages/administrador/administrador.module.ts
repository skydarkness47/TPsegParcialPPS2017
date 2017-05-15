import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Administrador } from './administrador';

@NgModule({
  declarations: [
    Administrador,
  ],
  imports: [
    IonicPageModule.forChild(Administrador),
  ],
  exports: [
    Administrador
  ]
})
export class AdministradorModule {}
