import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  getUserRole():string | null{
    if(sessionStorage.getItem("token")){
      const userRole = localStorage.getItem("role")
      return userRole
    }
    return null
  }
}
