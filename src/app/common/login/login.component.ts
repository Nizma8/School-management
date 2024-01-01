import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private fb:FormBuilder){}
   
  Email = new FormControl('',[Validators.required,Validators.email])
  Password = new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')])
  
  EmailTeacher = new FormControl('',[Validators.required,Validators.email])
  PasswordTeacher =  new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')])

  EmailStudent = new FormControl('',[Validators.required,Validators.email])
  PasswordStudent =new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')])
 
  panelOpenState = false;
  email:string="Email"
  password:string="Password"

  loginAdmin() {
    if(this.Email.valid && this.Password.valid){
      alert("valid")
    }
    
  }

  loginStudent(){
if(this.EmailTeacher.valid && this.PasswordTeacher.valid){
  alert("valid")
}
  }

  loginTeacher(){
if(this.EmailStudent.valid && this.PasswordStudent.valid){
  alert("valid")
}
  }
}
