import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTutorialsComponent } from './create-tutorials.component';

describe('CreateTutorialsComponent', () => {
  let component: CreateTutorialsComponent;
  let fixture: ComponentFixture<CreateTutorialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTutorialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTutorialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
