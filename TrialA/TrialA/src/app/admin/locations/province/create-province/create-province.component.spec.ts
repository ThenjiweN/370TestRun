import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProvinceComponent } from './create-province.component';

describe('CreateProvinceComponent', () => {
  let component: CreateProvinceComponent;
  let fixture: ComponentFixture<CreateProvinceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateProvinceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProvinceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
