import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  async isLoggedIn():Promise<boolean>{
    return true;
  }

  async login(){
    console.log("LOGUEANDO")
  }

  async register(){
    console.log("REGISTRANDO")
  }

  logOut(){

  }
}
