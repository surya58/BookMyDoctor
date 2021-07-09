import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGetpatbyidComponent } from './admin-getpatbyid.component';

describe('AdminGetpatbyidComponent', () => {
  let component: AdminGetpatbyidComponent;
  let fixture: ComponentFixture<AdminGetpatbyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminGetpatbyidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGetpatbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
