import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHairLengthComponent } from './view-hair-length.component';

describe('ViewHairLengthComponent', () => {
  let component: ViewHairLengthComponent;
  let fixture: ComponentFixture<ViewHairLengthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewHairLengthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewHairLengthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
