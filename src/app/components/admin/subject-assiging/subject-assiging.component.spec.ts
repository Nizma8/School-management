import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectAssigingComponent } from './subject-assiging.component';

describe('SubjectAssigingComponent', () => {
  let component: SubjectAssigingComponent;
  let fixture: ComponentFixture<SubjectAssigingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubjectAssigingComponent]
    });
    fixture = TestBed.createComponent(SubjectAssigingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
