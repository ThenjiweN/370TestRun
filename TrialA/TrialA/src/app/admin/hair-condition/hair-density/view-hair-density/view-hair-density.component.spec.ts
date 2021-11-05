import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHairDensityComponent } from './view-hair-density.component';

describe('ViewHairDensityComponent', () => {
  let component: ViewHairDensityComponent;
  let fixture: ComponentFixture<ViewHairDensityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewHairDensityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewHairDensityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
