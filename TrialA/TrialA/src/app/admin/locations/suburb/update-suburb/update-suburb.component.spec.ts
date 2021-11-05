import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSuburbComponent } from './update-suburb.component';

describe('UpdateSuburbComponent', () => {
  let component: UpdateSuburbComponent;
  let fixture: ComponentFixture<UpdateSuburbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSuburbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSuburbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
