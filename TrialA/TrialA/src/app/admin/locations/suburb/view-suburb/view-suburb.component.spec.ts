import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSuburbComponent } from './view-suburb.component';

describe('ViewSuburbComponent', () => {
  let component: ViewSuburbComponent;
  let fixture: ComponentFixture<ViewSuburbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSuburbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSuburbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
