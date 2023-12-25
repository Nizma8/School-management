import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomesTeacherComponent } from './homes-teacher.component';

describe('HomesTeacherComponent', () => {
  let component: HomesTeacherComponent;
  let fixture: ComponentFixture<HomesTeacherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomesTeacherComponent]
    });
    fixture = TestBed.createComponent(HomesTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
