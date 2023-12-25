import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { TeacherslistComponent } from 'src/app/components/admin/teacherslist/teacherslist.component';
import { StudentslistComponent } from 'src/app/components/admin/studentslist/studentslist.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  {
    path: 'teacherslist',
    component: TeacherslistComponent,
  },
  {
    path: 'studentsList',
    component: StudentslistComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
