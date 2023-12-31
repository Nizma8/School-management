import { Component } from '@angular/core';

@Component({
  selector: 'app-add-students',
  templateUrl: './add-students.component.html',
  styleUrls: ['./add-students.component.css']
})
export class AddStudentsComponent {
  name:string="Student"
  FirstName:string ="First Name"
  lastName:string ="Last Name"
  class:string="Class" 
  gender:string="Gender"
  dob:string="Date Of Birth"
  admno:string="Admission No"
  subject:string="Subject"
  tym:string= "Join Date"
  email:string="string"
  adress:string="Adress"
  UploadPhoto:string="Upload Recent Photograph"
}
