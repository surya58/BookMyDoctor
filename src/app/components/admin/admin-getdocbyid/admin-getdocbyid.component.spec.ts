import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGetdocbyidComponent } from './admin-getdocbyid.component';

describe('AdminGetdocbyidComponent', () => {
  let component: AdminGetdocbyidComponent;
  let fixture: ComponentFixture<AdminGetdocbyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminGetdocbyidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGetdocbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
