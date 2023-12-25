import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomesAdminComponent } from './homes-admin.component';

describe('HomesAdminComponent', () => {
  let component: HomesAdminComponent;
  let fixture: ComponentFixture<HomesAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomesAdminComponent]
    });
    fixture = TestBed.createComponent(HomesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
