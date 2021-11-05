import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConUnsPaymentComponent } from './con-uns-payment.component';

describe('ConUnsPaymentComponent', () => {
  let component: ConUnsPaymentComponent;
  let fixture: ComponentFixture<ConUnsPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConUnsPaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConUnsPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
