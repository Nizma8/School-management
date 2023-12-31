import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
  constructor(private homeRouter:Router){}
  addstudents(){
   this.homeRouter.navigateByUrl('/teachers/addstudents')
  }
}
