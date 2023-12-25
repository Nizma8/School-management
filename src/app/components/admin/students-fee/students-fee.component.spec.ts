import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsFeeComponent } from './students-fee.component';

describe('StudentsFeeComponent', () => {
  let component: StudentsFeeComponent;
  let fixture: ComponentFixture<StudentsFeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentsFeeComponent]
    });
    fixture = TestBed.createComponent(StudentsFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
