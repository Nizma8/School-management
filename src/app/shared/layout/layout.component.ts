import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent {
  @Input() userRole: string = '';

  folders: Section[] = [
    {
      name: 'Dashboard',
      icons:'heroHomeSolid'
    },
    {
      name: 'Students',
      icons:'heroUsersSolid'

    },
    {
      name: 'Teachers',
      icons:'heroUsersSolid'

    },
    {
      name: 'Events',
      icons:'heroBellAlertSolid'

    },
    {
      name: 'Subject',
      icons:'heroBookOpenSolid'

    },
    {
      name: 'Exam',
      icons:'heroEnvelopeSolid'

    },
    {
      name: 'TimeTable',
      icons:'heroTableCellsSolid'

    },
    {
      name: 'Class-Schedule',
      icons:'heroAcademicCapSolid'

    },
    {
      name: 'Class',
      icons:'heroBuildingLibrarySolid'

    },
    {
      name: 'Attendence',
      icons:'heroExclamationCircleSolid'

    },
    {
      name: 'Fee',
      icons:'heroCurrencyRupeeSolid'

    },
    {
      name: 'payroll',
      icons:'heroCircleStackSolid'

    },
  ];
  notes: Section[] = [
    {
      name: 'Settings',
      icons:'heroCog8ToothSolid'
    },
    {
      name: 'logout',
      icons:'heroArrowRightOnRectangleSolid'
    },
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
}
