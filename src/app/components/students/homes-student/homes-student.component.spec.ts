import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomesStudentComponent } from './homes-student.component';

describe('HomesStudentComponent', () => {
  let component: HomesStudentComponent;
  let fixture: ComponentFixture<HomesStudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomesStudentComponent]
    });
    fixture = TestBed.createComponent(HomesStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
