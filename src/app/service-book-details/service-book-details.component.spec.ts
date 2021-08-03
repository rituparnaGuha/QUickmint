import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceBookDetailsComponent } from './service-book-details.component';

describe('ServiceBookDetailsComponent', () => {
  let component: ServiceBookDetailsComponent;
  let fixture: ComponentFixture<ServiceBookDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceBookDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceBookDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
