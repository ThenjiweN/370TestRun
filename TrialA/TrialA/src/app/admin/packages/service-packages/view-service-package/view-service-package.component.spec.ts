import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewServicePackageComponent } from './view-service-package.component';

describe('ViewServicePackageComponent', () => {
  let component: ViewServicePackageComponent;
  let fixture: ComponentFixture<ViewServicePackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewServicePackageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewServicePackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
