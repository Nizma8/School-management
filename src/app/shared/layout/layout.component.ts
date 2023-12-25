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
    },
    {
      name: 'Students',
    },
    {
      name: 'Teachers',
    },
    {
      name: 'Events',
    },
    {
      name: 'Subject',
    },
    {
      name: 'Exam',
    },
    {
      name: 'TimeTable',
    },
    {
      name: 'Class-Schedule',
    },
    {
      name: 'Class',
    },
    {
      name: 'Attendence',
    },
    {
      name: 'payroll',
    },
  ];
  notes: Section[] = [
    {
      name: 'Settings',
    },
    {
      name: 'logout',
    },
  ];
}
export interface Section {
  name: string;
}
