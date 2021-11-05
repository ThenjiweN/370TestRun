import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHairDensityComponent } from './create-hair-density.component';

describe('CreateHairDensityComponent', () => {
  let component: CreateHairDensityComponent;
  let fixture: ComponentFixture<CreateHairDensityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateHairDensityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateHairDensityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
