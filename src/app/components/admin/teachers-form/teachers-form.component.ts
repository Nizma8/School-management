import { Component } from '@angular/core';

@Component({
  selector: 'app-teachers-form',
  templateUrl: './teachers-form.component.html',
  styleUrls: ['./teachers-form.component.css']
})
export class TeachersFormComponent {
  name:string="teacher"
  FirstName:string ="First Name"
  lastName:string ="Last Name"
  class:string="Class" 
  gender:string="Gender"
  dob:string="Date Of Birth"
  admno:string="Id No"
  subject:string="Subject"
  tym:string= "Join Date"
  email:string="Email"
  adress:string="Adress"
  UploadPhoto:string="Upload Recent Photograph"
}
