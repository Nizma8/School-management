import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacherslist',
  templateUrl: './teacherslist.component.html',
  styleUrls: ['./teacherslist.component.css']
})
export class TeacherslistComponent {
  constructor(private homeRouter:Router){}
  addTeachers(){
    this.homeRouter.navigateByUrl('/admin/teacherregistrationForm')  }
}
