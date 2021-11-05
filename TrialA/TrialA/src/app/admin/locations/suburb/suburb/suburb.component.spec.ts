import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuburbComponent } from './suburb.component';

describe('SuburbComponent', () => {
  let component: SuburbComponent;
  let fixture: ComponentFixture<SuburbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuburbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuburbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
