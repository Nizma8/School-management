import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
 role:string | null =''
 constructor (private auth:AuthService){}
 ngOnInit(): void {
   this.role = this.auth.getUserRole()
 }

}
