import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListsComponent } from './components/lists/lists.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { StudentslistComponent } from './components/admin/studentslist/studentslist.component';
import { TeacherslistComponent } from './components/admin/teacherslist/teacherslist.component';
import { AttendenceComponent } from './components/admin/attendence/attendence.component';
import { TimetableComponent } from './components/admin/timetable/timetable.component';
import { EventsComponent } from './components/admin/events/events.component';
import { SubjectAssigingComponent } from './components/admin/subject-assiging/subject-assiging.component';
import { StudentsFeeComponent } from './components/admin/students-fee/students-fee.component';
import { TeacherPayComponent } from './components/admin/teacher-pay/teacher-pay.component';
import { StudentsReportCardComponent } from './components/admin/students-report-card/students-report-card.component';
import { StudentListComponent } from './components/teachers/student-list/student-list.component';
import { EventsListComponent } from './components/teachers/events-list/events-list.component';
import { ReportCardComponent } from './components/teachers/report-card/report-card.component';
import { RegisterComponent } from './common/register/register.component';
import { LoginComponent } from './common/login/login.component';
import { LogoutComponent } from './common/logout/logout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomesAdminComponent } from './components/admin/homes-admin/homes-admin.component';
import { HomesTeacherComponent } from './components/teachers/homes-teacher/homes-teacher.component';
import { HomesStudentComponent } from './components/students/homes-student/homes-student.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDividerModule} from '@angular/material/divider';
import { MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    ListsComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    StudentslistComponent,
    TeacherslistComponent,
    AttendenceComponent,
    TimetableComponent,
    EventsComponent,
    SubjectAssigingComponent,
    StudentsFeeComponent,
    TeacherPayComponent,
    StudentsReportCardComponent,
    StudentListComponent,
    EventsListComponent,
    ReportCardComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    DashboardComponent,
    HomesAdminComponent,
    HomesTeacherComponent,
    HomesStudentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatListModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
