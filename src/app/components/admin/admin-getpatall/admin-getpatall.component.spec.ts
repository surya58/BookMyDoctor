import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGetpatallComponent } from './admin-getpatall.component';

describe('AdminGetpatallComponent', () => {
  let component: AdminGetpatallComponent;
  let fixture: ComponentFixture<AdminGetpatallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminGetpatallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGetpatallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
