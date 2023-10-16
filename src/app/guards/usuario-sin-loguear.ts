import {  inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const usuarioSinLoguear: CanActivateFn = async (route, state) => {
  const auth = inject(AuthService);
  const logueado = await auth.isLoggedIn()
  if(logueado){
    const router = inject(Router);
    router.navigate(['contacts']);
    return false;
  }
  return true;
};
