import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInventoryTypeComponent } from './view-inventory-type.component';

describe('ViewInventoryTypeComponent', () => {
  let component: ViewInventoryTypeComponent;
  let fixture: ComponentFixture<ViewInventoryTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewInventoryTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewInventoryTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
