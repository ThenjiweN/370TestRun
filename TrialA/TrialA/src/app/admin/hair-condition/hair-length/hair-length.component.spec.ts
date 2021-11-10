import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HairLengthComponent } from './hair-length.component';

describe('HairLengthComponent', () => {
  let component: HairLengthComponent;
  let fixture: ComponentFixture<HairLengthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HairLengthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HairLengthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
