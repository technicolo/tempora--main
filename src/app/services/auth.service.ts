import { Injectable, inject } from '@angular/core';
import { API } from '../constants/api';
import { LoginData, RegisterData } from '../interfaces/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(){
    this.token = localStorage.getItem('token');
  }
  router = inject(Router);
  token:string | null;

  async login(loginData:LoginData){
    const res = await fetch(API+"authentication/authenticate", {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(loginData)
    })
    if(!res.ok) return false;
    const tokenRecibido = await res.text()
    console.log("LOGUEANDO",tokenRecibido)
    localStorage.setItem("token",tokenRecibido);
    this.token = tokenRecibido;
    return true;
  }

  async register(registerData: RegisterData){
    const res = await fetch(API+"User", {
      method: "POST",
      body: JSON.stringify(registerData)
    });
    console.log("REGISTRANDO",res)
  }

  logOut(){
    localStorage.removeItem("token");
    this.router.navigate(["/"]);
  }
}
