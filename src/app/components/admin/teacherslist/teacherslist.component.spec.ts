import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherslistComponent } from './teacherslist.component';

describe('TeacherslistComponent', () => {
  let component: TeacherslistComponent;
  let fixture: ComponentFixture<TeacherslistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeacherslistComponent]
    });
    fixture = TestBed.createComponent(TeacherslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
