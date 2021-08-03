import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderMyBookingComponent } from './provider-my-booking.component';

describe('ProviderMyBookingComponent', () => {
  let component: ProviderMyBookingComponent;
  let fixture: ComponentFixture<ProviderMyBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderMyBookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderMyBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
