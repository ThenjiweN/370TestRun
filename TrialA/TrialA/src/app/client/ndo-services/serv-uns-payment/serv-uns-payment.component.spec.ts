import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServUnsPaymentComponent } from './serv-uns-payment.component';

describe('ServUnsPaymentComponent', () => {
  let component: ServUnsPaymentComponent;
  let fixture: ComponentFixture<ServUnsPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServUnsPaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServUnsPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
