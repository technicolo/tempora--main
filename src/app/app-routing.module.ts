import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { usuarioLogueadoGuard } from './guards/usuario-logueado.guard';
import { usuarioSinLoguear } from './guards/usuario-sin-loguear';

const routes: Routes = [
  {
    path:"login",
   // canActivate: [usuarioSinLoguear],
    loadChildren: ()=> import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path:"register",
  //  canActivate: [usuarioSinLoguear],
    loadChildren: ()=> import('./pages/register/register.module').then(m => m.RegisterModule)
  },
  {
    path:"contacts",
    //canActivate: [usuarioLogueadoGuard],
    loadChildren: ()=> import('./pages/contacts/contacts.module').then(m => m.ContactsModule)
  },
  {
    path:"contacts/:id",
   // canActivate: [usuarioLogueadoGuard],
    loadChildren: ()=> import('./pages/detalle-contacto/detalle-contacto.module').then(m => m.DetalleContactoModule)
  },
 // {
 //   path: "",
 //   redirectTo: 'contacts',
 //   pathMatch: "full"
 // },
  {
    path:"**",
    loadChildren: ()=> import('./pages/error/error.module').then(m => m.ErrorModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
