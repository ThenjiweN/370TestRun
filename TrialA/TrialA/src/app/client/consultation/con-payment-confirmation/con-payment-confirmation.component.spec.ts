import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConPaymentConfirmationComponent } from './con-payment-confirmation.component';

describe('ConPaymentConfirmationComponent', () => {
  let component: ConPaymentConfirmationComponent;
  let fixture: ComponentFixture<ConPaymentConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConPaymentConfirmationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConPaymentConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
