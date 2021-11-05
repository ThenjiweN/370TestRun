import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHairDensityComponent } from './update-hair-density.component';

describe('UpdateHairDensityComponent', () => {
  let component: UpdateHairDensityComponent;
  let fixture: ComponentFixture<UpdateHairDensityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateHairDensityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateHairDensityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
