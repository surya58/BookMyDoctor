import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocSpecialityComponent } from './doc-speciality.component';

describe('DocSpecialityComponent', () => {
  let component: DocSpecialityComponent;
  let fixture: ComponentFixture<DocSpecialityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocSpecialityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocSpecialityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
