import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { ModalProyectoComponent } from './modal-proyecto/modal-proyecto.component';



@NgModule({
  declarations: [
    ModalComponent,
    ModalProyectoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
