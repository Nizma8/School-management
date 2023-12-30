import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { TeacherslistComponent } from 'src/app/components/admin/teacherslist/teacherslist.component';
import { StudentslistComponent } from 'src/app/components/admin/studentslist/studentslist.component';
import { StudentsFormComponent } from 'src/app/components/admin/students-form/students-form.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  {
  path: 'teacherslist',
    component: TeacherslistComponent,
  },
  {
    path: 'studentslist',
    component: StudentslistComponent,
  },
  {
    path:'addStudents',
    component:StudentsFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
