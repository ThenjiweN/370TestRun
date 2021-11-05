import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllergenComponent } from './view-allergen.component';

describe('ViewAllergenComponent', () => {
  let component: ViewAllergenComponent;
  let fixture: ComponentFixture<ViewAllergenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllergenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllergenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
