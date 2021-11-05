import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateServicePackageComponent } from './create-service-package.component';

describe('CreateServicePackageComponent', () => {
  let component: CreateServicePackageComponent;
  let fixture: ComponentFixture<CreateServicePackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateServicePackageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateServicePackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
