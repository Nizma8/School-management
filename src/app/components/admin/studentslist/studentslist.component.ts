import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentslist',
  templateUrl: './studentslist.component.html',
  styleUrls: ['./studentslist.component.css']
})
export class StudentslistComponent {
 constructor(private homeRouter:Router){}
 addStudents(){
this.homeRouter.navigateByUrl('/admin/studentregistrationForm')

 }
}
