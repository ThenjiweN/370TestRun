import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHairLengthComponent } from './update-hair-length.component';

describe('UpdateHairLengthComponent', () => {
  let component: UpdateHairLengthComponent;
  let fixture: ComponentFixture<UpdateHairLengthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateHairLengthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateHairLengthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
