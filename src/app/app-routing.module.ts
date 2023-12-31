import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './common/login/login.component';
import { FormsComponent } from './components/forms/forms.component';

const routes: Routes = [
  {
    path: 'students',
    loadChildren: () =>
      import('./modules/students/students.module').then(
        (m) => m.StudentsModule
      ),
  },
  {
    path: 'teachers',
    loadChildren: () =>
      import('./modules/teachers/teachers.module').then(
        (m) => m.TeachersModule
      ),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./modules/admin/admin.module').then((m) => m.AdminModule),
  },

  {
    path: '',
    component: LoginComponent,
  },
  {
    path:'add', component:FormsComponent,
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
