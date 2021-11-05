import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTutorialsComponent } from './update-tutorials.component';

describe('UpdateTutorialsComponent', () => {
  let component: UpdateTutorialsComponent;
  let fixture: ComponentFixture<UpdateTutorialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTutorialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTutorialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
