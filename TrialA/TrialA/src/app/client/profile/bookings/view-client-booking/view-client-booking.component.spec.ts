import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewClientBookingComponent } from './view-client-booking.component';

describe('ViewClientBookingComponent', () => {
  let component: ViewClientBookingComponent;
  let fixture: ComponentFixture<ViewClientBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewClientBookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewClientBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
