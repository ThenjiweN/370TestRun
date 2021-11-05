import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HairDensityComponent } from './hair-density.component';

describe('HairDensityComponent', () => {
  let component: HairDensityComponent;
  let fixture: ComponentFixture<HairDensityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HairDensityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HairDensityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
