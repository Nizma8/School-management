import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit{
  @Input() userRole: string = '';
  role:string | null=''
  constructor(private auth:AuthService){}
ngOnInit(): void {
  this.role = this.auth.getUserRole()
  
}

  folders: Section[] = [
    {
      name: 'Dashboard',
      icons:'heroHomeSolid',
      path:''
    },
    {
      name: 'Students',
      icons:'heroUsersSolid',
      path:`/admin/studentslist`

    },
    {
      name: 'Teachers',
      icons:'heroUsersSolid',
path:`/${this.role}/teacherslist`
    },
    {
      name: 'Events',
      icons:'heroBellAlertSolid'
,path:'/events'
    },
    {
      name: 'Subject',
      icons:'heroBookOpenSolid'
,path:'/suject'
    },
    {
      name: 'Exam',
      icons:'heroEnvelopeSolid'
,path:'/exam'
    },
    {
      name: 'TimeTable',
      icons:'heroTableCellsSolid'
,path:'/timetable'
    },
    {
      name: 'Class-Schedule',
      icons:'heroAcademicCapSolid'
,path:'/classSchedule'
    },
    {
      name: 'Class',
      icons:'heroBuildingLibrarySolid'
,path:'/class'
    },
    {
      name: 'Attendence',
      icons:'heroExclamationCircleSolid'
,path:'/attendence'
    },
    {
      name: 'Fee',
      icons:'heroCurrencyRupeeSolid'
,path:'/fee'
    },
    {
      name: 'payroll',
      icons:'heroCircleStackSolid'
,path:'/payroll'
    },
  ];
  notes: Section[] = [
    {
      name: 'Settings',
      icons:'heroCog8ToothSolid',
      path:'/setting'
    },
    {
      name: 'logout',
      icons:'heroArrowRightOnRectangleSolid',
      path:'/logout'
    }
  ];

  sectionRole: Record<string, Section[]> ={
    admin :this.folders,
    teacher: this.folders.filter(folder=>folder.name==="Dashboard" || folder.name==="Students" || folder.name=== "Events" || folder.name=== "TimeTable" || folder.name === "Class-Schedule" || folder.name ==="Attendence"),
    student:this.folders.filter(folder=>folder.name=== "dashboard")
  }
}
export interface Section {
  name: string;
  icons:String;
  path:string
}
