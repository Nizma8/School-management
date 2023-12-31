import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeachersComponent } from './teachers.component';
import { StudentListComponent } from 'src/app/components/teachers/student-list/student-list.component';
import { AddStudentsComponent } from 'src/app/components/teachers/add-students/add-students.component';

const routes: Routes = [{ path: '', component: TeachersComponent },  { path: 'studentslist', component: StudentListComponent },{
  path:'addstudents',component:AddStudentsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeachersRoutingModule { }
