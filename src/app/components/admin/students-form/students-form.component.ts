import { Component } from '@angular/core';

@Component({
  selector: 'app-students-form',
  templateUrl: './students-form.component.html',
  styleUrls: ['./students-form.component.css']
})
export class StudentsFormComponent {
 
  name:string="Student"
  FirstName:string ="First Name"
  lastName:string ="Last Name"
  guardian:string="Guardian"
  class:string="Class" 
  gender:string="Gender"
  dob:string="Date Of Birth"
  admno:string="Admission No"
  tym:string= "Join Date"
  email:string="string"
  adress:string="Adress"
  UploadPhoto:string="Upload Recent Photograph"
}
