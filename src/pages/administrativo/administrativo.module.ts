import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Administrativo } from './administrativo';

@NgModule({
  declarations: [
    Administrativo,
  ],
  imports: [
    IonicPageModule.forChild(Administrativo),
  ],
  exports: [
    Administrativo
  ]
})
export class AdministrativoModule {}
