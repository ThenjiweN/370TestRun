import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAllergenComponent } from './update-allergen.component';

describe('UpdateAllergenComponent', () => {
  let component: UpdateAllergenComponent;
  let fixture: ComponentFixture<UpdateAllergenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAllergenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAllergenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
