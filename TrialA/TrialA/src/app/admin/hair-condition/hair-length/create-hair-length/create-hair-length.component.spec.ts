import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHairLengthComponent } from './create-hair-length.component';

describe('CreateHairLengthComponent', () => {
  let component: CreateHairLengthComponent;
  let fixture: ComponentFixture<CreateHairLengthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateHairLengthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateHairLengthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
