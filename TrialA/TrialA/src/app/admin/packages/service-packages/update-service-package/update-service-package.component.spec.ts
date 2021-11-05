import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateServicePackageComponent } from './update-service-package.component';

describe('UpdateServicePackageComponent', () => {
  let component: UpdateServicePackageComponent;
  let fixture: ComponentFixture<UpdateServicePackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateServicePackageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateServicePackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
