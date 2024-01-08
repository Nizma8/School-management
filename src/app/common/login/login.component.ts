import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  incorrectRouteMessage:string=""
  
  constructor(private fb:FormBuilder , private api:ServicesService, private route:Router){}
   
  Email = new FormControl('',[Validators.required])
  Password = new FormControl('',[Validators.required])
  
  EmailTeacher = new FormControl('',[Validators.required,Validators.email])
  PasswordTeacher =  new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')])

  EmailStudent = new FormControl('',[Validators.required,Validators.email])
  PasswordStudent =new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')])
 
  panelOpenState = false;
  email:string="Email"
  password:string="Password"

  loginAdmin() {
    // Check if both Email and Password are valid before making the API call
    if (this.Email.valid && this.Password.valid) {
      const username = this.Email.value;
      const password = this.Password.value;
      const role: string = "admin";
  
      const reqBody = { username, password, role };
      this.api.login(reqBody).subscribe({
        next: (res: any) => {
          console.log(res);
          localStorage.setItem("role",res.existingAdmin.role
          )
          sessionStorage.setItem("token",res.token)
          localStorage.setItem("user",JSON.stringify(res.existingAdmin))
          this.route.navigateByUrl('dashboard')
        },
        error: (err: any) => {
          console.error('Error in loginAdmin:', err);
  
          // Handle different error scenarios
          if (err.status === 401 || err.status === 404) {
            // Invalid password
            alert("Invalid login credentials!!");
          }  else if (err.status === 403) {
            // Incorrect route
            this.incorrectRouteMessage = "Please make sure you are logging in from the right portal.";
          } else {
            // Other error
            console.log("An error occurred. Please try again later.");
          }
        }
      });
    } else {
      // Form controls are invalid, display a message or handle it as needed
      console.log("Invalid input. Please check your inputs.");
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
