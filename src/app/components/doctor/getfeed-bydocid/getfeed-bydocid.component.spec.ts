import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetfeedBydocidComponent } from './getfeed-bydocid.component';

describe('GetfeedBydocidComponent', () => {
  let component: GetfeedBydocidComponent;
  let fixture: ComponentFixture<GetfeedBydocidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetfeedBydocidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetfeedBydocidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
