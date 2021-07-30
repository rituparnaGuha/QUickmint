import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredCustomerListComponent } from './registered-customer-list.component';

describe('RegisteredCustomerListComponent', () => {
  let component: RegisteredCustomerListComponent;
  let fixture: ComponentFixture<RegisteredCustomerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisteredCustomerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteredCustomerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
