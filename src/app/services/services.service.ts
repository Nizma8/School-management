import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
base_url:string="http://localhost:3000"
  constructor(private http:HttpClient) { }
  // admin login
  login(user:any){
   return this.http.post(`${this.base_url}/admin/login`,user)
  }


}
