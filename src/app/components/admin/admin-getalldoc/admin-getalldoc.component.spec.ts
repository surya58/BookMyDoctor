import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGetalldocComponent } from './admin-getalldoc.component';

describe('AdminGetalldocComponent', () => {
  let component: AdminGetalldocComponent;
  let fixture: ComponentFixture<AdminGetalldocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminGetalldocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGetalldocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
