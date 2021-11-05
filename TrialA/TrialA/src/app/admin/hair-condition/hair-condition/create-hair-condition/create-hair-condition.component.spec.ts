import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHairConditionComponent } from './create-hair-condition.component';

describe('CreateHairConditionComponent', () => {
  let component: CreateHairConditionComponent;
  let fixture: ComponentFixture<CreateHairConditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateHairConditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateHairConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
