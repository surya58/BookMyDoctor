import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallAppointmentComponent } from './getall-appointment.component';

describe('GetallAppointmentComponent', () => {
  let component: GetallAppointmentComponent;
  let fixture: ComponentFixture<GetallAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetallAppointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetallAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
