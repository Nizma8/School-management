import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'front-end';
  role:string | null =''

  constructor(private auth:AuthService){}
   ngOnInit(): void {
     this.role = this.auth.getUserRole()
   }
}
