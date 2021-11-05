import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHairConditionComponent } from './update-hair-condition.component';

describe('UpdateHairConditionComponent', () => {
  let component: UpdateHairConditionComponent;
  let fixture: ComponentFixture<UpdateHairConditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateHairConditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateHairConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
