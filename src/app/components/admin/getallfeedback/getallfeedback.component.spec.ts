import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallfeedbackComponent } from './getallfeedback.component';

describe('GetallfeedbackComponent', () => {
  let component: GetallfeedbackComponent;
  let fixture: ComponentFixture<GetallfeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetallfeedbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetallfeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
