import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HairConditionComponent } from './hair-condition.component';

describe('HairConditionComponent', () => {
  let component: HairConditionComponent;
  let fixture: ComponentFixture<HairConditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HairConditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HairConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
