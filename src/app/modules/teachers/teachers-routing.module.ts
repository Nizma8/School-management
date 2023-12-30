import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeachersComponent } from './teachers.component';
import { StudentListComponent } from 'src/app/components/teachers/student-list/student-list.component';

const routes: Routes = [{ path: '', component: TeachersComponent },  { path: 'studentslist', component: StudentListComponent },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeachersRoutingModule { }
