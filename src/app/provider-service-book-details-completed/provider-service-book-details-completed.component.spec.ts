import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderServiceBookDetailsCompletedComponent } from './provider-service-book-details-completed.component';

describe('ProviderServiceBookDetailsCompletedComponent', () => {
  let component: ProviderServiceBookDetailsCompletedComponent;
  let fixture: ComponentFixture<ProviderServiceBookDetailsCompletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderServiceBookDetailsCompletedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderServiceBookDetailsCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
