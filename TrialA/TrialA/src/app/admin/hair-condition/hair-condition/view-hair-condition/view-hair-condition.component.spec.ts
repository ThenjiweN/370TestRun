import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHairConditionComponent } from './view-hair-condition.component';

describe('ViewHairConditionComponent', () => {
  let component: ViewHairConditionComponent;
  let fixture: ComponentFixture<ViewHairConditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewHairConditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewHairConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
