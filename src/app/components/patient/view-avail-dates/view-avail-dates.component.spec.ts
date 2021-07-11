import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAvailDatesComponent } from './view-avail-dates.component';

describe('ViewAvailDatesComponent', () => {
  let component: ViewAvailDatesComponent;
  let fixture: ComponentFixture<ViewAvailDatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAvailDatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAvailDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
