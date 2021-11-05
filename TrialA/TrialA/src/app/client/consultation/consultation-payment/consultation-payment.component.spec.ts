import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationPaymentComponent } from './consultation-payment.component';

describe('ConsultationPaymentComponent', () => {
  let component: ConsultationPaymentComponent;
  let fixture: ComponentFixture<ConsultationPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultationPaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
