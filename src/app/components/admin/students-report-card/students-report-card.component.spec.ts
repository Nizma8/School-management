import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsReportCardComponent } from './students-report-card.component';

describe('StudentsReportCardComponent', () => {
  let component: StudentsReportCardComponent;
  let fixture: ComponentFixture<StudentsReportCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentsReportCardComponent]
    });
    fixture = TestBed.createComponent(StudentsReportCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
