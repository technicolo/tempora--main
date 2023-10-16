import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleContactoComponent } from './detalle-contacto.component';

const routes: Routes = [
  {
    path: '',
    component: DetalleContactoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetalleContactoRoutingModule { }
