import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnReasonComponent } from './return-reason.component';

describe('ReturnReasonComponent', () => {
  let component: ReturnReasonComponent;
  let fixture: ComponentFixture<ReturnReasonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnReasonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnReasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
